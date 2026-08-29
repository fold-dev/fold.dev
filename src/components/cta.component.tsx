import { useEffect, useRef } from 'react'
import styles from './cta.component.module.css'

type Star = {
    x: number
    y: number
    size: number
    speed: number
    baseOpacity: number
    layer: number
}

type Particle = {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    alpha: number
    life: number
    maxLife: number
}

export const CtaSection = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const container = canvas?.parentElement
        const context = canvas?.getContext('2d')

        if (!canvas || !container || !context) return

        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const particles: Particle[] = []
        let stars: Star[] = []
        let width = 0
        let height = 0
        let animationFrame = 0
        let previousTime = performance.now()

        const createStars = () => {
            const scalingFactor = Math.max(width, height) / 1000
            const speeds = [0.4, 0.1, 0.04]
            stars = []

            for (let layer = 0; layer < 3; layer++) {
                const count = Math.floor(50 * scalingFactor * (layer + 1))

                for (let index = 0; index < count; index++) {
                    stars.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        size: Math.random() * (layer + 0.5) + 0.1,
                        speed: speeds[layer],
                        baseOpacity: Math.random() * 0.5,
                        layer,
                    })
                }
            }
        }

        const resize = () => {
            const rect = container.getBoundingClientRect()
            width = rect.width
            height = rect.height
            canvas.width = Math.round(width * dpr)
            canvas.height = Math.round(height * dpr)
            context.setTransform(dpr, 0, 0, dpr, 0, 0)
            createStars()
        }

        const spawnParticle = (horizonY: number, curveRadius: number, curveCenterY: number) => {
            const spread = 0.68
            const x = width * (0.5 - spread / 2) + Math.random() * width * spread
            const distanceFromCenter = x - width / 2
            const y = curveCenterY - Math.sqrt(Math.max(0, curveRadius ** 2 - distanceFromCenter ** 2))

            particles.push({
                x,
                y,
                vx: (Math.random() - 0.5) * 0.15,
                vy: -(0.15 + Math.random() * 0.05),
                size: 0.25 + Math.random() * 1.5,
                alpha: 0,
                life: 0,
                maxLife: 10000 + Math.random() * 4000,
            })
        }

        const draw = (time: number) => {
            const elapsed = Math.min(time - previousTime, 50)
            const frameScale = elapsed / (1000 / 60)
            previousTime = time
            context.clearRect(0, 0, width, height)

            for (const star of stars) {
                if (!prefersReducedMotion) star.y -= star.speed * frameScale

                if (star.y < 0) {
                    star.y = height
                    star.x = Math.random() * width
                }

                const opacity = star.baseOpacity + Math.sin(time * 0.001 * star.speed) * 0.2
                context.fillStyle = `rgba(255, 255, 255, ${Math.max(0, opacity)})`
                context.fillRect(star.x, star.y, star.size, star.size)
            }

            const horizonY = height * 0.48
            const curveRadius = width < 600 ? width * 5 : width * 2.5
            const curveCenterY = horizonY + curveRadius
            const glow = context.createRadialGradient(width / 2, horizonY, 0, width / 2, horizonY, height * 0.5)
            glow.addColorStop(0, 'rgba(105, 68, 252, 0.18)')
            glow.addColorStop(0.4, 'rgba(105, 68, 252, 0.06)')
            glow.addColorStop(1, 'transparent')
            context.fillStyle = glow
            context.fillRect(0, 0, width, horizonY + 10)

            const shimmer = context.createRadialGradient(width / 2, horizonY, 0, width / 2, horizonY, width * 0.5)
            const shimmerIntensity = prefersReducedMotion ? 0.2 : 0.2 + Math.sin(time * 0.0008) * 0.05
            shimmer.addColorStop(0, `rgba(140, 120, 255, ${shimmerIntensity})`)
            shimmer.addColorStop(1, 'transparent')
            context.fillStyle = shimmer
            context.fillRect(0, 0, width, horizonY + 100)

            context.beginPath()
            context.arc(width / 2, curveCenterY, curveRadius, 0, Math.PI * 2)
            context.fillStyle = '#0e0f15'
            context.fill()

            const arcOffset = Math.asin(width / (2 * curveRadius))
            const arcStart = Math.PI + arcOffset
            const arcEnd = 2 * Math.PI - arcOffset
            context.beginPath()
            context.arc(width / 2, curveCenterY, curveRadius, arcStart, arcEnd)
            context.strokeStyle = 'rgba(105, 68, 252, 0.2)'
            context.lineWidth = 1
            context.stroke()

            context.save()
            context.beginPath()
            context.arc(width / 2, curveCenterY, curveRadius, arcStart, arcEnd)
            context.strokeStyle = 'rgba(105, 68, 252, 0.1)'
            context.lineWidth = 30
            context.filter = 'blur(15px)'
            context.stroke()
            context.restore()

            if (!prefersReducedMotion && Math.random() < 0.15 * frameScale) {
                spawnParticle(horizonY, curveRadius, curveCenterY)
            }

            for (let index = particles.length - 1; index >= 0; index--) {
                const particle = particles[index]
                particle.life += elapsed
                particle.x += particle.vx * frameScale
                particle.y += particle.vy * frameScale

                const lifeRatio = particle.life / particle.maxLife
                if (lifeRatio < 0.15) particle.alpha = lifeRatio / 0.15
                else if (lifeRatio > 0.6) particle.alpha = 1 - (lifeRatio - 0.6) / 0.4
                else particle.alpha = 1
                particle.alpha *= 0.15

                if (particle.life >= particle.maxLife) {
                    particles.splice(index, 1)
                    continue
                }

                context.beginPath()
                context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                context.fillStyle = `rgba(150, 130, 255, ${particle.alpha})`
                context.fill()
            }

            if (!prefersReducedMotion) animationFrame = requestAnimationFrame(draw)
        }

        const handleResize = () => {
            resize()
            if (prefersReducedMotion) draw(performance.now())
        }

        resize()
        window.addEventListener('resize', handleResize)

        if (prefersReducedMotion) draw(performance.now())
        else animationFrame = requestAnimationFrame(draw)

        return () => {
            cancelAnimationFrame(animationFrame)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <section className={styles.section} aria-labelledby="fold-cta-title">
            <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
            <div className={styles.fade} aria-hidden="true" />
            <div className={styles.content}>
                <h2 id="fold-cta-title" className={styles.heading}>
                    Ready to build with Fold?
                </h2>
                <p className={styles.copy}>Build faster with flexible, zero-dependency React components.</p>
                <a className={styles.button} href="/docs/getting-started">
                    Get started
                </a>
            </div>
        </section>
    )
}
