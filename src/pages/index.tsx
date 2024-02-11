import {
    Attachment,
    Avatar,
    Badge,
    Button,
    ButtonGroup,
    Card,
    Cookie,
    Copy,
    DarkModeButton,
    DarkModeToggle,
    DatePicker,
    DateRangeProvider,
    Divider,
    Flexer,
    FoldProvider,
    Grid,
    GridItem,
    Header,
    Heading,
    IconLib,
    Image,
    Li,
    Link,
    List,
    LogoSolid,
    Menu,
    MenuItemOption,
    MenuOptionGroup,
    Option,
    Options,
    Palette,
    Pill,
    Range,
    ScrollingDatePicker,
    SkipNavMain,
    Sparkline,
    Stack,
    Tab,
    TabList,
    Tabs,
    Text,
    Timeline,
    TimelineItem,
    View,
    useCacheValue,
    useCheck,
    useVisibility,
} from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import Head from 'next/head'
import { useEffect, useMemo, useRef, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import MobileComponent from './components/mobile.component'

export const colors = {
    purple: `
    :root {
        --f-color-accent-50: #faf5ff;
        --f-color-accent-100: #e9d8fd;
        --f-color-accent-200: #d6bcfa;
        --f-color-accent-300: #b794f4;
        --f-color-accent-400: #9f7aea;
        --f-color-accent-500: #805ad5;
        --f-color-accent-600: #6b46c1;
        --f-color-accent-700: #553c9a;
        --f-color-accent-800: #44337a;
        --f-color-accent-900: #322659;
    }
    [data-theme='light'] {
        --f-focus: 3px solid #d6bcfa;
        --f-color-background: #f7fafc;
        --f-color-accent: #805ad5;
        --f-color-accent-weak: #faf5ff;
        --f-color-success: #38b2ac;
        --f-color-success-weak: #b2f5ea;
        --f-color-neutral: #a0aec0;
        --f-color-neutral-weak: #f0f5fa;
        --f-color-caution: #ecc94b;
        --f-color-caution-weak: #fefcbf;
        --f-color-warning: #ed8936;
        --f-color-warning-weak: #feebc8;
        --f-color-danger: #f56565;
        --f-color-danger-weak: #fed7d7;
        --f-color-highlight: #9f7aea;
        --f-color-highlight-weak: #e9d8fd;
        --f-color-text: #2d3748;
        --f-color-text-weak: #4a5568;
        --f-color-text-weaker: #718096;
        --f-color-text-weakest: #cbd5e0;
        --f-color-text-link: #805ad5;
        --f-color-text-on-color: #ffffff;
        --f-color-surface: #ffffff;
        --f-color-surface-strong: #f7fafc;
        --f-color-surface-stronger: #f0f5fa;
        --f-color-surface-strongest: #e2e8f0;
        --f-color-surface-highlight: #e9d8fd;
        --f-color-surface-inverse: #2d3748;
        --f-color-border: #e2e8f0;
        --f-color-border-strong: #cbd5e0;
        }
        [data-theme='dark'] {
        --f-focus: 3px solid #6b46c1;
        --f-color-background: #171923;
        --f-color-accent: #9f7aea;
        --f-color-accent-weak: #322659;
        --f-color-success: #38b2ac;
        --f-color-success-weak: #1d4044;
        --f-color-neutral: #a0aec0;
        --f-color-neutral-weak: #171923;
        --f-color-caution: #ecc94b;
        --f-color-caution-weak: #5f370e;
        --f-color-warning: #ed8936;
        --f-color-warning-weak: #652b19;
        --f-color-danger: #f56565;
        --f-color-danger-weak: #63171b;
        --f-color-highlight: #9f7aea;
        --f-color-highlight-weak: #322659;
        --f-color-text: #f0f5fa;
        --f-color-text-weak: #cbd5e0;
        --f-color-text-weaker: #a0aec0;
        --f-color-text-weakest: #4a5568;
        --f-color-text-link: #9f7aea;
        --f-color-text-on-color: #000000;
        --f-color-surface: #1a202c;
        --f-color-surface-strong: #2d3748;
        --f-color-surface-stronger: #4a5568;
        --f-color-surface-strongest: #a0aec0;
        --f-color-surface-highlight: #553c9a;
        --f-color-surface-inverse: #cbd5e0;
        --f-color-border: #2d3748;
        --f-color-border-strong: #4a5568;
    }
`,
    neonpink: `
:root {
    --f-color-accent-50: #ffd6e4;
    --f-color-accent-100: #ffb9c6;
    --f-color-accent-200: #ffa2bc;
    --f-color-accent-300: #ff7aba;
    --f-color-accent-400: #ff2e7e;
    --f-color-accent-500: #ed2d49;
    --f-color-accent-600: #d1002d;
    --f-color-accent-700: #ac0039;
    --f-color-accent-800: #7e0019;
    --f-color-accent-900: #5c0017;
}
[data-theme='light'] {
    --f-focus: 3px solid #ffa2bc;
    --f-color-background: #f7fafc;
    --f-color-accent: #ed2d49;
    --f-color-accent-weak: #ffd6e4;
    --f-color-success: #38b2ac;
    --f-color-success-weak: #b2f5ea;
    --f-color-neutral: #a0aec0;
    --f-color-neutral-weak: #f0f5fa;
    --f-color-caution: #ecc94b;
    --f-color-caution-weak: #fefcbf;
    --f-color-warning: #ed8936;
    --f-color-warning-weak: #feebc8;
    --f-color-danger: #f56565;
    --f-color-danger-weak: #fed7d7;
    --f-color-highlight: #9f7aea;
    --f-color-highlight-weak: #e9d8fd;
    --f-color-text: #2d3748;
    --f-color-text-weak: #4a5568;
    --f-color-text-weaker: #718096;
    --f-color-text-weakest: #cbd5e0;
    --f-color-text-link: #ed2d49;
    --f-color-text-on-color: #ffffff;
    --f-color-surface: #ffffff;
    --f-color-surface-strong: #f7fafc;
    --f-color-surface-stronger: #f0f5fa;
    --f-color-surface-strongest: #e2e8f0;
    --f-color-surface-highlight: #ffb9c6;
    --f-color-surface-inverse: #2d3748;
    --f-color-border: #e2e8f0;
    --f-color-border-strong: #cbd5e0;
  }
  [data-theme='dark'] {
    --f-focus: 3px solid #d1002d;
    --f-color-background: #171923;
    --f-color-accent: #ff2e7e;
    --f-color-accent-weak: #5c0017;
    --f-color-success: #38b2ac;
    --f-color-success-weak: #1d4044;
    --f-color-neutral: #a0aec0;
    --f-color-neutral-weak: #171923;
    --f-color-caution: #ecc94b;
    --f-color-caution-weak: #5f370e;
    --f-color-warning: #ed8936;
    --f-color-warning-weak: #652b19;
    --f-color-danger: #f56565;
    --f-color-danger-weak: #63171b;
    --f-color-highlight: #9f7aea;
    --f-color-highlight-weak: #322659;
    --f-color-text: #f0f5fa;
    --f-color-text-weak: #cbd5e0;
    --f-color-text-weaker: #a0aec0;
    --f-color-text-weakest: #4a5568;
    --f-color-text-link: #ff2e7e;
    --f-color-text-on-color: #000000;
    --f-color-surface: #1a202c;
    --f-color-surface-strong: #2d3748;
    --f-color-surface-stronger: #4a5568;
    --f-color-surface-strongest: #a0aec0;
    --f-color-surface-highlight: #ac0039;
    --f-color-surface-inverse: #cbd5e0;
    --f-color-border: #2d3748;
    --f-color-border-strong: #4a5568;
  }
`,
    red: `
:root {
    --f-color-accent-50: #fff5f5;
    --f-color-accent-100: #fed7d7;
    --f-color-accent-200: #feb2b2;
    --f-color-accent-300: #fc8181;
    --f-color-accent-400: #f56565;
    --f-color-accent-500: #e53e3e;
    --f-color-accent-600: #c53030;
    --f-color-accent-700: #9b2c2c;
    --f-color-accent-800: #822727;
    --f-color-accent-900: #63171b;
}
[data-theme='light'] {
    --f-focus: 3px solid #feb2b2;
    --f-color-background: #f7fafc;
    --f-color-accent: #e53e3e;
    --f-color-accent-weak: #fff5f5;
    --f-color-success: #38b2ac;
    --f-color-success-weak: #b2f5ea;
    --f-color-neutral: #a0aec0;
    --f-color-neutral-weak: #f0f5fa;
    --f-color-caution: #ecc94b;
    --f-color-caution-weak: #fefcbf;
    --f-color-warning: #ed8936;
    --f-color-warning-weak: #feebc8;
    --f-color-danger: #f56565;
    --f-color-danger-weak: #fed7d7;
    --f-color-highlight: #9f7aea;
    --f-color-highlight-weak: #e9d8fd;
    --f-color-text: #2d3748;
    --f-color-text-weak: #4a5568;
    --f-color-text-weaker: #718096;
    --f-color-text-weakest: #cbd5e0;
    --f-color-text-link: #e53e3e;
    --f-color-text-on-color: #ffffff;
    --f-color-surface: #ffffff;
    --f-color-surface-strong: #f7fafc;
    --f-color-surface-stronger: #f0f5fa;
    --f-color-surface-strongest: #e2e8f0;
    --f-color-surface-highlight: #fed7d7;
    --f-color-surface-inverse: #2d3748;
    --f-color-border: #e2e8f0;
    --f-color-border-strong: #cbd5e0;
  }
  [data-theme='dark'] {
    --f-focus: 3px solid #c53030;
    --f-color-background: #171923;
    --f-color-accent: #f56565;
    --f-color-accent-weak: #63171b;
    --f-color-success: #38b2ac;
    --f-color-success-weak: #1d4044;
    --f-color-neutral: #a0aec0;
    --f-color-neutral-weak: #171923;
    --f-color-caution: #ecc94b;
    --f-color-caution-weak: #5f370e;
    --f-color-warning: #ed8936;
    --f-color-warning-weak: #652b19;
    --f-color-danger: #f56565;
    --f-color-danger-weak: #63171b;
    --f-color-highlight: #9f7aea;
    --f-color-highlight-weak: #322659;
    --f-color-text: #f0f5fa;
    --f-color-text-weak: #cbd5e0;
    --f-color-text-weaker: #a0aec0;
    --f-color-text-weakest: #4a5568;
    --f-color-text-link: #f56565;
    --f-color-text-on-color: #000000;
    --f-color-surface: #1a202c;
    --f-color-surface-strong: #2d3748;
    --f-color-surface-stronger: #4a5568;
    --f-color-surface-strongest: #a0aec0;
    --f-color-surface-highlight: #9b2c2c;
    --f-color-surface-inverse: #cbd5e0;
    --f-color-border: #2d3748;
    --f-color-border-strong: #4a5568;
  }
  
`,
    orange: `
:root {
    --f-color-accent-50: #fffaf0;
    --f-color-accent-100: #feebc8;
    --f-color-accent-200: #fbd38d;
    --f-color-accent-300: #f6ad55;
    --f-color-accent-400: #ed8936;
    --f-color-accent-500: #dd6b20;
    --f-color-accent-600: #c05621;
    --f-color-accent-700: #9c4221;
    --f-color-accent-800: #7b341e;
    --f-color-accent-900: #652b19;
}
[data-theme='light'] {
    --f-focus: 3px solid #fbd38d;
    --f-color-background: #f7fafc;
    --f-color-accent: #dd6b20;
    --f-color-accent-weak: #fffaf0;
    --f-color-success: #38b2ac;
    --f-color-success-weak: #b2f5ea;
    --f-color-neutral: #a0aec0;
    --f-color-neutral-weak: #f0f5fa;
    --f-color-caution: #ecc94b;
    --f-color-caution-weak: #fefcbf;
    --f-color-warning: #ed8936;
    --f-color-warning-weak: #feebc8;
    --f-color-danger: #f56565;
    --f-color-danger-weak: #fed7d7;
    --f-color-highlight: #9f7aea;
    --f-color-highlight-weak: #e9d8fd;
    --f-color-text: #2d3748;
    --f-color-text-weak: #4a5568;
    --f-color-text-weaker: #718096;
    --f-color-text-weakest: #cbd5e0;
    --f-color-text-link: #dd6b20;
    --f-color-text-on-color: #ffffff;
    --f-color-surface: #ffffff;
    --f-color-surface-strong: #f7fafc;
    --f-color-surface-stronger: #f0f5fa;
    --f-color-surface-strongest: #e2e8f0;
    --f-color-surface-highlight: #feebc8;
    --f-color-surface-inverse: #2d3748;
    --f-color-border: #e2e8f0;
    --f-color-border-strong: #cbd5e0;
  }
  [data-theme='dark'] {
    --f-focus: 3px solid #c05621;
    --f-color-background: #171923;
    --f-color-accent: #ed8936;
    --f-color-accent-weak: #652b19;
    --f-color-success: #38b2ac;
    --f-color-success-weak: #1d4044;
    --f-color-neutral: #a0aec0;
    --f-color-neutral-weak: #171923;
    --f-color-caution: #ecc94b;
    --f-color-caution-weak: #5f370e;
    --f-color-warning: #ed8936;
    --f-color-warning-weak: #652b19;
    --f-color-danger: #f56565;
    --f-color-danger-weak: #63171b;
    --f-color-highlight: #9f7aea;
    --f-color-highlight-weak: #322659;
    --f-color-text: #f0f5fa;
    --f-color-text-weak: #cbd5e0;
    --f-color-text-weaker: #a0aec0;
    --f-color-text-weakest: #4a5568;
    --f-color-text-link: #ed8936;
    --f-color-text-on-color: #000000;
    --f-color-surface: #1a202c;
    --f-color-surface-strong: #2d3748;
    --f-color-surface-stronger: #4a5568;
    --f-color-surface-strongest: #a0aec0;
    --f-color-surface-highlight: #9c4221;
    --f-color-surface-inverse: #cbd5e0;
    --f-color-border: #2d3748;
    --f-color-border-strong: #4a5568;
  }
`,
    yellow: `
:root {
    --f-color-accent-50: #fffff0;
    --f-color-accent-100: #fefcbf;
    --f-color-accent-200: #faf089;
    --f-color-accent-300: #f6e05e;
    --f-color-accent-400: #ecc94b;
    --f-color-accent-500: #d69e2e;
    --f-color-accent-600: #b7791f;
    --f-color-accent-700: #975a16;
    --f-color-accent-800: #744210;
    --f-color-accent-900: #5f370e;
}

[data-theme='light'] {
  --f-radius: 1.5rem;
  --f-focus: 3px solid #faf089;
  --f-color-background: #f7fafc;
  --f-color-accent: #d69e2e;
  --f-color-accent-weak: #fffff0;
  --f-color-success: #38b2ac;
  --f-color-success-weak: #b2f5ea;
  --f-color-neutral: #a0aec0;
  --f-color-neutral-weak: #f0f5fa;
  --f-color-caution: #ecc94b;
  --f-color-caution-weak: #fefcbf;
  --f-color-warning: #ed8936;
  --f-color-warning-weak: #feebc8;
  --f-color-danger: #f56565;
  --f-color-danger-weak: #fed7d7;
  --f-color-highlight: #9f7aea;
  --f-color-highlight-weak: #e9d8fd;
  --f-color-text: #2d3748;
  --f-color-text-weak: #4a5568;
  --f-color-text-weaker: #718096;
  --f-color-text-weakest: #cbd5e0;
  --f-color-text-link: #d69e2e;
  --f-color-text-on-color: #ffffff;
  --f-color-surface: #ffffff;
  --f-color-surface-strong: #f7fafc;
  --f-color-surface-stronger: #f0f5fa;
  --f-color-surface-strongest: #e2e8f0;
  --f-color-surface-highlight: #fefcbf;
  --f-color-surface-inverse: #2d3748;
  --f-color-border: #e2e8f0;
  --f-color-border-strong: #cbd5e0;
}

[data-theme='dark'] {
  --f-radius: 1.5rem;
  --f-focus: 3px solid #b7791f;
  --f-color-background: #171923;
  --f-color-accent: #ecc94b;
  --f-color-accent-weak: #5f370e;
  --f-color-success: #38b2ac;
  --f-color-success-weak: #1d4044;
  --f-color-neutral: #a0aec0;
  --f-color-neutral-weak: #171923;
  --f-color-caution: #ecc94b;
  --f-color-caution-weak: #5f370e;
  --f-color-warning: #ed8936;
  --f-color-warning-weak: #652b19;
  --f-color-danger: #f56565;
  --f-color-danger-weak: #63171b;
  --f-color-highlight: #9f7aea;
  --f-color-highlight-weak: #322659;
  --f-color-text: #f0f5fa;
  --f-color-text-weak: #cbd5e0;
  --f-color-text-weaker: #a0aec0;
  --f-color-text-weakest: #4a5568;
  --f-color-text-link: #ecc94b;
  --f-color-text-on-color: #000000;
  --f-color-surface: #1a202c;
  --f-color-surface-strong: #2d3748;
  --f-color-surface-stronger: #4a5568;
  --f-color-surface-strongest: #a0aec0;
  --f-color-surface-highlight: #975a16;
  --f-color-surface-inverse: #cbd5e0;
  --f-color-border: #2d3748;
  --f-color-border-strong: #4a5568;
}


`,
    green: `
:root {
    --f-color-accent-50: #f0fff4;
    --f-color-accent-100: #c6f6d5;
    --f-color-accent-200: #9ae6b4;
    --f-color-accent-300: #68d391;
    --f-color-accent-400: #48bb78;
    --f-color-accent-500: #38a169;
    --f-color-accent-600: #2f855a;
    --f-color-accent-700: #276749;
    --f-color-accent-800: #22543d;
    --f-color-accent-900: #1c4532;
}
[data-theme='light'] {
    --f-focus: 3px solid #9ae6b4;
    --f-color-background: #f7fafc;
    --f-color-accent: #38a169;
    --f-color-accent-weak: #f0fff4;
    --f-color-success: #38b2ac;
    --f-color-success-weak: #b2f5ea;
    --f-color-neutral: #a0aec0;
    --f-color-neutral-weak: #f0f5fa;
    --f-color-caution: #ecc94b;
    --f-color-caution-weak: #fefcbf;
    --f-color-warning: #ed8936;
    --f-color-warning-weak: #feebc8;
    --f-color-danger: #f56565;
    --f-color-danger-weak: #fed7d7;
    --f-color-highlight: #9f7aea;
    --f-color-highlight-weak: #e9d8fd;
    --f-color-text: #2d3748;
    --f-color-text-weak: #4a5568;
    --f-color-text-weaker: #718096;
    --f-color-text-weakest: #cbd5e0;
    --f-color-text-link: #38a169;
    --f-color-text-on-color: #ffffff;
    --f-color-surface: #ffffff;
    --f-color-surface-strong: #f7fafc;
    --f-color-surface-stronger: #f0f5fa;
    --f-color-surface-strongest: #e2e8f0;
    --f-color-surface-highlight: #c6f6d5;
    --f-color-surface-inverse: #2d3748;
    --f-color-border: #e2e8f0;
    --f-color-border-strong: #cbd5e0;
  }
  [data-theme='dark'] {
    --f-focus: 3px solid #2f855a;
    --f-color-background: #171923;
    --f-color-accent: #48bb78;
    --f-color-accent-weak: #1c4532;
    --f-color-success: #38b2ac;
    --f-color-success-weak: #1d4044;
    --f-color-neutral: #a0aec0;
    --f-color-neutral-weak: #171923;
    --f-color-caution: #ecc94b;
    --f-color-caution-weak: #5f370e;
    --f-color-warning: #ed8936;
    --f-color-warning-weak: #652b19;
    --f-color-danger: #f56565;
    --f-color-danger-weak: #63171b;
    --f-color-highlight: #9f7aea;
    --f-color-highlight-weak: #322659;
    --f-color-text: #f0f5fa;
    --f-color-text-weak: #cbd5e0;
    --f-color-text-weaker: #a0aec0;
    --f-color-text-weakest: #4a5568;
    --f-color-text-link: #48bb78;
    --f-color-text-on-color: #000000;
    --f-color-surface: #1a202c;
    --f-color-surface-strong: #2d3748;
    --f-color-surface-stronger: #4a5568;
    --f-color-surface-strongest: #a0aec0;
    --f-color-surface-highlight: #276749;
    --f-color-surface-inverse: #cbd5e0;
    --f-color-border: #2d3748;
    --f-color-border-strong: #4a5568;
  }
`,
    teal: `
:root {
    --f-color-accent-50: #e6fffa;
    --f-color-accent-100: #b2f5ea;
    --f-color-accent-200: #81e6d9;
    --f-color-accent-300: #4fd1c5;
    --f-color-accent-400: #38b2ac;
    --f-color-accent-500: #319795;
    --f-color-accent-600: #2c7a7b;
    --f-color-accent-700: #285e61;
    --f-color-accent-800: #234e52;
    --f-color-accent-900: #1d4044;
}
[data-theme='light'] {
    --f-focus: 3px solid #81e6d9;
    --f-color-background: #f7fafc;
    --f-color-accent: #319795;
    --f-color-accent-weak: #e6fffa;
    --f-color-success: #38b2ac;
    --f-color-success-weak: #b2f5ea;
    --f-color-neutral: #a0aec0;
    --f-color-neutral-weak: #f0f5fa;
    --f-color-caution: #ecc94b;
    --f-color-caution-weak: #fefcbf;
    --f-color-warning: #ed8936;
    --f-color-warning-weak: #feebc8;
    --f-color-danger: #f56565;
    --f-color-danger-weak: #fed7d7;
    --f-color-highlight: #9f7aea;
    --f-color-highlight-weak: #e9d8fd;
    --f-color-text: #2d3748;
    --f-color-text-weak: #4a5568;
    --f-color-text-weaker: #718096;
    --f-color-text-weakest: #cbd5e0;
    --f-color-text-link: #319795;
    --f-color-text-on-color: #ffffff;
    --f-color-surface: #ffffff;
    --f-color-surface-strong: #f7fafc;
    --f-color-surface-stronger: #f0f5fa;
    --f-color-surface-strongest: #e2e8f0;
    --f-color-surface-highlight: #b2f5ea;
    --f-color-surface-inverse: #2d3748;
    --f-color-border: #e2e8f0;
    --f-color-border-strong: #cbd5e0;
  }
  [data-theme='dark'] {
    --f-focus: 3px solid #2c7a7b;
    --f-color-background: #171923;
    --f-color-accent: #38b2ac;
    --f-color-accent-weak: #1d4044;
    --f-color-success: #38b2ac;
    --f-color-success-weak: #1d4044;
    --f-color-neutral: #a0aec0;
    --f-color-neutral-weak: #171923;
    --f-color-caution: #ecc94b;
    --f-color-caution-weak: #5f370e;
    --f-color-warning: #ed8936;
    --f-color-warning-weak: #652b19;
    --f-color-danger: #f56565;
    --f-color-danger-weak: #63171b;
    --f-color-highlight: #9f7aea;
    --f-color-highlight-weak: #322659;
    --f-color-text: #f0f5fa;
    --f-color-text-weak: #cbd5e0;
    --f-color-text-weaker: #a0aec0;
    --f-color-text-weakest: #4a5568;
    --f-color-text-link: #38b2ac;
    --f-color-text-on-color: #000000;
    --f-color-surface: #1a202c;
    --f-color-surface-strong: #2d3748;
    --f-color-surface-stronger: #4a5568;
    --f-color-surface-strongest: #a0aec0;
    --f-color-surface-highlight: #285e61;
    --f-color-surface-inverse: #cbd5e0;
    --f-color-border: #2d3748;
    --f-color-border-strong: #4a5568;
  }
`,
    cyan: `
:root {
    --f-color-accent-50: #edfdfd;
    --f-color-accent-100: #c4f1f9;
    --f-color-accent-200: #9decf9;
    --f-color-accent-300: #76e4f7;
    --f-color-accent-400: #0bc5ea;
    --f-color-accent-500: #00b5d8;
    --f-color-accent-600: #00a3c4;
    --f-color-accent-700: #0987a0;
    --f-color-accent-800: #086f83;
    --f-color-accent-900: #065666;
}
[data-theme='light'] {
    --f-focus: 3px solid #9decf9;
    --f-color-background: #f7fafc;
    --f-color-accent: #00b5d8;
    --f-color-accent-weak: #edfdfd;
    --f-color-success: #38b2ac;
    --f-color-success-weak: #b2f5ea;
    --f-color-neutral: #a0aec0;
    --f-color-neutral-weak: #f0f5fa;
    --f-color-caution: #ecc94b;
    --f-color-caution-weak: #fefcbf;
    --f-color-warning: #ed8936;
    --f-color-warning-weak: #feebc8;
    --f-color-danger: #f56565;
    --f-color-danger-weak: #fed7d7;
    --f-color-highlight: #9f7aea;
    --f-color-highlight-weak: #e9d8fd;
    --f-color-text: #2d3748;
    --f-color-text-weak: #4a5568;
    --f-color-text-weaker: #718096;
    --f-color-text-weakest: #cbd5e0;
    --f-color-text-link: #00b5d8;
    --f-color-text-on-color: #ffffff;
    --f-color-surface: #ffffff;
    --f-color-surface-strong: #f7fafc;
    --f-color-surface-stronger: #f0f5fa;
    --f-color-surface-strongest: #e2e8f0;
    --f-color-surface-highlight: #c4f1f9;
    --f-color-surface-inverse: #2d3748;
    --f-color-border: #e2e8f0;
    --f-color-border-strong: #cbd5e0;
  }
  [data-theme='dark'] {
    --f-focus: 3px solid #00a3c4;
    --f-color-background: #171923;
    --f-color-accent: #0bc5ea;
    --f-color-accent-weak: #065666;
    --f-color-success: #38b2ac;
    --f-color-success-weak: #1d4044;
    --f-color-neutral: #a0aec0;
    --f-color-neutral-weak: #171923;
    --f-color-caution: #ecc94b;
    --f-color-caution-weak: #5f370e;
    --f-color-warning: #ed8936;
    --f-color-warning-weak: #652b19;
    --f-color-danger: #f56565;
    --f-color-danger-weak: #63171b;
    --f-color-highlight: #9f7aea;
    --f-color-highlight-weak: #322659;
    --f-color-text: #f0f5fa;
    --f-color-text-weak: #cbd5e0;
    --f-color-text-weaker: #a0aec0;
    --f-color-text-weakest: #4a5568;
    --f-color-text-link: #0bc5ea;
    --f-color-text-on-color: #000000;
    --f-color-surface: #1a202c;
    --f-color-surface-strong: #2d3748;
    --f-color-surface-stronger: #4a5568;
    --f-color-surface-strongest: #a0aec0;
    --f-color-surface-highlight: #0987a0;
    --f-color-surface-inverse: #cbd5e0;
    --f-color-border: #2d3748;
    --f-color-border-strong: #4a5568;
  }
`,
    electric: `
:root {
    --f-color-accent-50: #d0e6ff;
    --f-color-accent-100: #b9daff;
    --f-color-accent-200: #a2cdff;
    --f-color-accent-300: #7ab8ff;
    --f-color-accent-400: #2e90ff;
    --f-color-accent-500: #0078ff;
    --f-color-accent-600: #0063d1;
    --f-color-accent-700: #0052ac;
    --f-color-accent-800: #003c7e;
    --f-color-accent-900: #002c5c;
}

[data-theme='light'] {
    --f-focus: 3px solid #a2cdff;
    --f-color-background: #f7fafc;
    --f-color-accent: #0078ff;
    --f-color-accent-weak: #d0e6ff;
    --f-color-success: #38b2ac;
    --f-color-success-weak: #b2f5ea;
    --f-color-neutral: #a0aec0;
    --f-color-neutral-weak: #f0f5fa;
    --f-color-caution: #ecc94b;
    --f-color-caution-weak: #fefcbf;
    --f-color-warning: #ed8936;
    --f-color-warning-weak: #feebc8;
    --f-color-danger: #f56565;
    --f-color-danger-weak: #fed7d7;
    --f-color-highlight: #9f7aea;
    --f-color-highlight-weak: #e9d8fd;
    --f-color-text: #2d3748;
    --f-color-text-weak: #4a5568;
    --f-color-text-weaker: #718096;
    --f-color-text-weakest: #cbd5e0;
    --f-color-text-link: #0078ff;
    --f-color-text-on-color: #ffffff;
    --f-color-surface: #ffffff;
    --f-color-surface-strong: #f7fafc;
    --f-color-surface-stronger: #f0f5fa;
    --f-color-surface-strongest: #e2e8f0;
    --f-color-surface-highlight: #b9daff;
    --f-color-surface-inverse: #2d3748;
    --f-color-border: #e2e8f0;
    --f-color-border-strong: #cbd5e0;
  }

  [data-theme='dark'] {
  --f-radius: 1.5rem;
  --f-focus: 3px solid #0063d1;
  --f-color-background: #171923;
  --f-color-accent: #2e90ff;
  --f-color-accent-weak: #002c5c;
  --f-color-success: #38b2ac;
  --f-color-success-weak: #1d4044;
  --f-color-neutral: #a0aec0;
  --f-color-neutral-weak: #171923;
  --f-color-caution: #ecc94b;
  --f-color-caution-weak: #5f370e;
  --f-color-warning: #ed8936;
  --f-color-warning-weak: #652b19;
  --f-color-danger: #f56565;
  --f-color-danger-weak: #63171b;
  --f-color-highlight: #9f7aea;
  --f-color-highlight-weak: #322659;
  --f-color-text: #f0f5fa;
  --f-color-text-weak: #cbd5e0;
  --f-color-text-weaker: #a0aec0;
  --f-color-text-weakest: #4a5568;
  --f-color-text-link: #2e90ff;
  --f-color-text-on-color: #000000;
  --f-color-surface: #1a202c;
  --f-color-surface-strong: #2d3748;
  --f-color-surface-stronger: #4a5568;
  --f-color-surface-strongest: #a0aec0;
  --f-color-surface-highlight: #0052ac;
  --f-color-surface-inverse: #cbd5e0;
  --f-color-border: #2d3748;
  --f-color-border-strong: #4a5568;
}

`,
}

const sparkline = [
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
]

export const NormalDatePicker = () => {
    const [date, setDate] = useState(new Date())
    const { firstDay, lastDay } = useMemo(() => {
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 14);
        const lastDay = new Date(date.getFullYear(), date.getMonth(), 18);
        return { firstDay, lastDay }
    }, [])
    const [selection, setSelection] = useState<any[]>([[firstDay, lastDay]])

    const handleSelection = (date: Date) => {
        if (selection.length == 0) {
            setSelection([[date, null]])
        } else {
            const selected = selection[0]
            if (!selected[0]) return setSelection([date, null])
            if (!!selected[0] && !!selected[1]) return setSelection([[date, null]])
            if (!!selected[0] && !selected[1])
                return setSelection(selected[0] > date ? [[date, selected[0]]] : [[selected[0], date]])
        }
    }

    return (
        <DateRangeProvider>
            <DatePicker
                height={300}
                width="100%"
                defaultDate={date}
                selection={selection}
                onChange={handleSelection}
            />
        </DateRangeProvider>
    )
}

const All = () => {
    const [selected, setSelected] = useState<any>([])
    const [color, setColor] = useState(Token.ColorElectric400)
    const [value, setValue] = useState(5)
    const [option, setOption] = useState(0)

    const setAccent = (color) => {
        document.getElementById('custom-styles').innerHTML = colors[color]
    }

    const setFont = (family) => {
        const d: any = document.querySelector(':root')

        d.style.setProperty('--f-font-heading', family)
        d.style.setProperty('--f-font-body', family)
    }

    useEffect(() => {
        switch (option) {
            case 0:
                return setFont(
                    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
                )
            case 1:
                return setFont(
                    'Inter, -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
                )
            case 2:
                return setFont(
                    'DM Sans, -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
                )
        }
    }, [option])

    useEffect(() => {
        const of = 2
        const percent = value / 10
        const radius = of * percent + 'rem'
        const d: any = document.querySelector(':root')

        d.style.setProperty('--f-radius', radius)
    }, [value])

    useEffect(() => {
        switch (color) {
            case Token.ColorPurple400:
                return setAccent('purple')
            case Token.ColorNeonpink400:
                return setAccent('neonpink')
            case Token.ColorRed400:
                return setAccent('red')
            case Token.ColorOrange400:
                return setAccent('orange')
            case Token.ColorYellow400:
                return setAccent('yellow')
            case Token.ColorGreen400:
                return setAccent('green')
            case Token.ColorTeal400:
                return setAccent('teal')
            case Token.ColorCyan400:
                return setAccent('cyan')
            case Token.ColorElectric400:
                return setAccent('electric')
        }
    }, [color])

    return (
        <View
            row
            gap={10}
            height="fit-content"
            width="fit-content"
            justifyContent="flex-end">
            <View
                column
                gap={10}
                width={300}>
                <Menu width={300} zIndex="0" shadow="none">
                    <MenuOptionGroup
                        title="State Management"
                        defaultValue="redux"
                        type="radio">
                        <MenuItemOption value="redux">Redux1</MenuItemOption>
                        <MenuItemOption value="mobx">MobX</MenuItemOption>
                        <MenuItemOption value="zustand">Zustand</MenuItemOption>
                    </MenuOptionGroup>
                </Menu>

                <Card
                    p="0.75rem 1rem"
                    width="100%">
                    <Sparkline
                        data={sparkline}
                        variant="bar"
                        width="100%"
                        height={30}
                    />
                </Card>

                <Options
                    animated
                    shadow="none"
                    width="100%"
                    selected={option}
                    onOptionChange={setOption}>
                    <Option>System Font</Option>
                    <Option>Inter</Option>
                    <Option>DM Sans</Option>
                </Options>            

                <Card
                    p={20}
                    width="100%">
                    <Heading
                        as="h5"
                        fontWeight="bold"
                        m="0 0 1rem 0">
                        Activity
                    </Heading>
                    <Timeline>
                        <TimelineItem
                            marker={
                                <Avatar
                                    size="xs"
                                    src="https://randomuser.me/api/portraits/men/12.jpg"
                                />
                            }>
                            <Text>Rob opened the attachment in Microsoft Outlook</Text>
                        </TimelineItem>
                        <TimelineItem colorToken="text">
                            <Text>Image attachment downloaded from the server</Text>
                        </TimelineItem>
                        <TimelineItem colorToken="text">
                            <Text>Message flagged as harmless by anti-virus system</Text>
                        </TimelineItem>
                    </Timeline>
                </Card>

                <Card
                    p="0rem 1rem"
                    width="100%"
                    row>
                    <Tabs
                        selected={selected}
                        onSelect={setSelected}
                        animated>
                        <TabList
                            height={60}
                            border="none"
                            stretch
                            disableScroll>
                            <Tab>Members</Tab>
                            <Tab>Security</Tab>
                            <Tab>Account</Tab>
                        </TabList>
                    </Tabs>
                </Card>

                <Card
                    width="100%"
                    p="0.5rem 1rem">
                    <Palette
                        justifyContent="center"
                        gap={2}
                        color={color}
                        colors={[
                            Token.ColorPurple400,
                            Token.ColorNeonpink400,
                            Token.ColorRed400,
                            Token.ColorOrange400,
                            Token.ColorYellow400,
                            Token.ColorGreen400,
                            Token.ColorTeal400,
                            Token.ColorCyan400,
                            Token.ColorElectric400,
                        ]}
                        onChange={setColor}
                    />
                </Card>

                <Attachment
                    width="100%"
                    mime="image/png"
                    filesize={24325}
                    label="screenshot.png"
                    href="https://fold.dev"
                />

                <Copy
                    value="049d2ee4-6672-11ee-8c99-0242ac120002"
                    prefix={<IconLib icon="circle" />}
                    suffix={
                        <Pill
                            size="xs"
                            m="0 1rem">
                            UUID
                        </Pill>
                    }
                />

                <View
                    row
                    justifyContent="flex-start"
                    gap={5}
                    width="100%">
                    <Pill
                        size="sm"
                        color={Token.ColorNeonpink500}>
                        React
                    </Pill>
                    <Pill
                        size="sm"
                        color={Token.ColorPurple100}>
                        UI
                    </Pill>
                    <Pill
                        size="sm"
                        color={Token.ColorBlue300}>
                        Components
                    </Pill>
                    <Pill
                        size="sm"
                        color={Token.ColorSeagreen100}>
                        0 Dependency
                    </Pill>
                </View>
            </View>

            <View
                column
                width={300}
                gap={10}
                flex={1}
                alignItems="flex-end">
                <Card
                    width={300}
                    footer={
                        <>
                            <Divider />
                            <ButtonGroup
                                p={15}
                                justifyContent="stretch"
                                width="100%">
                                <Button>Book Now</Button>
                                <Button>Add to Wishlist</Button>
                            </ButtonGroup>
                        </>
                    }
                    header={
                        <Image
                            width="100%"
                            height={125}
                            src="./building.png"
                        />
                    }>
                    <View p={20}>
                        <Stack
                            direction="vertical"
                            spacing={10}>
                            <View
                                row
                                gap={5}
                                justifyContent="flex-start">
                                <Pill
                                    color={Token.ColorElectric400}
                                    subtle
                                    size="sm">
                                    co-working
                                </Pill>
                                <Pill
                                    color={Token.ColorAccent400}
                                    subtle
                                    size="sm">
                                    remote
                                </Pill>
                            </View>
                            <Heading as="h2">Perfect Getaway</Heading>
                            <Text>
                                A once in a lifetime opportunity to live and work remotely in a breathtaking location!
                            </Text>

                            <Text
                                size="sm"
                                colorToken="accent">
                                Terms & conditions apply
                            </Text>
                        </Stack>
                    </View>
                </Card>

                <Card
                    width="100%"
                    p={20}>
                    <Range
                        min={0}
                        max={10}
                        step={1}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </Card>

                <Card
                    width="100%"
                    p={10}
                    style={{ overflow: 'hidden' }}>
                    <NormalDatePicker />
                </Card>

                <View
                    row
                    justifyContent="flex-end"
                    gap={10}>
                    <Text
                        as="label"
                        htmlFor="dm">
                        Toggle Dark Mode
                    </Text>
                    <DarkModeToggle id="dm" />
                </View>
            </View>
        </View>
    )
}

function Home() {
    const { checked, check } = useCheck(true)
    const [option, setOption] = useState(-1)
    const [showChild, setShowChild] = useState(false)
    const { visible, hide, show } = useVisibility(false)
    const { isCached, getSafeCache, setCache } = useCacheValue('cookies')

    const denied = () => {
        setCache('no')
        hide()
    }

    const accepted = () => {
        setCache('yes')
        hide()
    }

    useEffect(() => {
        if (showChild) {
            if (getSafeCache().trim() == 'no') {
                document.querySelectorAll('[data-google="yes"]').forEach((el) => el.remove())
                hide()
            } else if (getSafeCache().trim() == 'yes') {
                hide()
            } else {
                show()
            }
        }
    }, [showChild, isCached])

    useEffect(() => {
        setShowChild(true)
    }, [])

    if (!showChild) return null

    return (
        <FoldProvider license="fake-license-code">
            <style id="custom-styles" />
            <SkipNavMain />
            <MobileComponent />

            <Cookie
                style={{
                    border: 'none',
                    background: 'var(--f-color-background)',
                }}
                onDismiss={() => null}
                isVisible={visible}
                buttons={[
                    { label: 'Deny', action: denied, variant: 'accent' },
                    { label: 'Accept', action: accepted, variant: 'accent' },
                ]}
                title="🍪 Cookie Policy"
                description={
                    <Text>
                        We use essential cookies to make our site work. With your consent, we may also use
                        non-essential cookies to improve user experience and analyze website traffic.
                    </Text>
                }
            />

            <View
                row
                p={8}
                gap={10}
                width="100%"
                position="relative"
                bgToken="accent-100">
                <Text
                    color="inherit"
                    colorToken="accent">
                    We've just launched the alpha version of Fold. Get started{' '}
                    <Link
                        href="/docs"
                        colorToken="accent"
                        target="_blank">
                        here
                    </Link>
                    ! 🚀
                </Text>
            </View>

            <Header
                display="none"
                bg="transparent"
                border="none">
                <View
                    row
                    gap={30}
                    width="100%"
                    p="2rem 2rem 0rem 2rem">
                    <LogoSolid />
                    <Flexer />
                    <Link
                        href="/terms-of-use"
                        target="_blank"
                        textDecoration="none">
                        Terms of Use
                    </Link>
                    <Link
                        href="/privacy-policy"
                        target="_blank"
                        textDecoration="none">
                        Privacy Policy
                    </Link>
                    <Link
                        href="/docs/community"
                        target="_blank"
                        textDecoration="none">
                        Support
                    </Link>
                    <Stack
                        spacing={10}
                        noStretch></Stack>
                    <DarkModeButton />
                </View>
            </Header>

            <View
                row
                gap={30}
                flex={1}
                width="100%"
                p="2rem 0 5rem 0"
                justifyContent="center">
                <View
                    column
                    flex={1}
                    gap={30}
                    alignItems="flex-start"
                    p="0 0 0 5rem"
                    id="home"
                    className="hero">
                    <LogoSolid color="var(--f-color-accent)" />

                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent">
                        Introducing
                    </Text>

                    <Heading
                        jumbo
                        colorToken="accent"
                        fontWeight={800}
                        lineHeight={0.9}>
                        The UI component library for product teams.
                    </Heading>

                    <Heading
                        as="h3"
                        colorToken="accent"
                        fontWeight={400}>
                        Powerful, fully customizable React components for scaling your product to the next level.
                        Supercharge your dev workflow by using our zero-dependency UI components.
                    </Heading>

                    <View
                        row
                        gap={5}
                        colorToken="accent-200">
                        <Button
                            variant="accent"
                            as="a"
                            target="_blank"
                            href="/docs">
                            Get Started
                        </Button>
                        <Button
                            subtle
                            as="a"
                            variant="accent"
                            target="_blank"
                            href="https://61fb81a2.sibforms.com/serve/MUIFAIdcVTZB8JLOGmoTu48YYshDwC7Uinyzu3h4sQKqJioZOki2cl7S5BCY9S_sw31Joe2i5fz6RGJfuKXy641YsGYsxkJLqlrTpZXa7H5tzVKRVbkDZvBCKpluQAp4hLkdoWVl7WsceXoIa6GPGRfxYe4tOM8IGmYO-1GfJ-DqScQ1p65akSfLMCl-fGu0sgUUYYnMUlZPn-CW">
                            Subscribe to Newsletter
                        </Button>
                    </View>

                    {/* 
                    <Text
                        size="sm"
                        colorToken="accent-200">
                        ...
                    </Text> 
                    */}
                </View>

                <View
                    row
                    flex={1}
                    p="0 5rem 0 0"
                    height="100%"
                    position="relative"
                    justifyContent="flex-start"
                    className="al1-components">
                    <All />
                </View>
            </View>

            {/* block */}
            <View
                row
                gap={100}
                flex={1}
                width="100%"
                alignItems="flex-start"
                bgToken="accent-700"
                p="5rem 0">
                <View
                    flex={1.5}
                    p="5rem 0rem 5rem 5rem"
                    position="relative">
                    <Grid
                        columns={2}
                        gap="40px 40px"
                        minChildWidth={100}>
                        {[
                            {
                                title: 'Open Source',
                                text: "We're open source. Free forever, no limits.",
                            },
                            {
                                title: 'Customizable',
                                text: 'Best of both worlds: traditional CSS & Javascript. Fold gives you flexibility without impacting performance.',
                            },
                            {
                                title: 'Performant',
                                text: 'Render performance has been a key consideration at virtually every step of the way, we believe apps should be snappy.',
                            },
                            {
                                title: 'Design System',
                                text: 'Fold ships with its own Design System and builds on a large palette of options, all available to use.',
                            },
                            {
                                title: 'Dark Mode',
                                text: 'Fold supports Dark Mode, out of the box.',
                            },
                            {
                                title: 'Zero Dependencies',
                                text: 'Say goodbye to dependency hell, no other dependencies are used for Fold other than React & ReactDOM.',
                            },
                            {
                                title: 'Full Featured',
                                text: 'Every use-case, we have you covered. Fold currently has 85+ custom components, with more on the way.',
                            },
                            {
                                title: 'Aesthetics',
                                text: 'Fold has been designed to not only work great, but look great in any project.',
                            },
                        ].map(({ title, text }, index) => (
                            <GridItem key={index}>
                                <Heading
                                    fontWeight={600}
                                    colorToken="accent-100"
                                    m="0 0 0.25rem 0">
                                    {title}
                                </Heading>
                                <Text colorToken="accent-200">{text}</Text>
                            </GridItem>
                        ))}
                    </Grid>
                </View>
                <View
                    column
                    flex={1}
                    gap={30}
                    alignItems="flex-start"
                    p="5rem 5rem 5rem 0rem">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent-400"
                        id="features">
                        Features
                    </Text>

                    <Heading
                        huge
                        colorToken="accent-50"
                        fontWeight={800}
                        lineHeight={0.9}>
                        Built to scale with you.
                    </Heading>

                    <Heading
                        as="h3"
                        colorToken="accent-200"
                        fontWeight={400}>
                        Whether it's a SaaS product or enterprise app, we have you covered.
                    </Heading>
                </View>
            </View>

            <View
                row
                gap={100}
                flex={1}
                width="100%"
                alignItems="flex-start"
                bgToken="accent-600"
                p="5rem 0">
                <View
                    column
                    flex={1}
                    gap={30}
                    alignItems="flex-end"
                    p="5rem 0 5rem 5rem">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent-400"
                        textAlign="right"
                        id="support">
                        Support
                    </Text>

                    <Heading
                        huge
                        colorToken="accent-200"
                        fontWeight={800}
                        lineHeight={0.9}
                        textAlign="right">
                        Need some help?
                    </Heading>

                    <Heading
                        as="h3"
                        colorToken="accent-300"
                        fontWeight={400}
                        textAlign="right">
                        Need some help with using Fold in your project?
                    </Heading>
                </View>
                <View
                    column
                    gap={30}
                    flex={1.5}
                    p="5rem 5rem 5rem 0"
                    position="relative">
                    {[
                        {
                            url: 'https://github.com/fold-dev/fold/discussions',
                            title: 'Discussions',
                            text: 'We rely on GitHub Discussions to power our community. If you have a question or suggestion, start a discussion.',
                        },
                        {
                            url: 'https://github.com/fold-dev/fold/issues',
                            title: 'Issues',
                            text: 'Open an issue or pull request on our GitHub repository if you want to contribute or report a bug.',
                        },
                        {
                            url: 'mailto:support@fold.dev',
                            title: 'Email',
                            text: 'We try to answer all of the emails that land in our inbox.',
                        },
                    ].map(({ title, text, url }, index) => (
                        <View
                            key={index}
                            width="100%">
                            <Link
                                href={url}
                                target="_blank"
                                textDecoration="none">
                                <Heading
                                    fontWeight={600}
                                    colorToken="accent-100">
                                    {title} ↗
                                </Heading>
                            </Link>
                            <Text colorToken="accent-300">{text}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View
                row
                p={100}
                bgToken="accent-500"
                alignItems="flex-start">
                <View
                    flex={1}
                    column
                    gap={20}
                    alignItems="flex-start">
                    <LogoSolid color="var(--f-color-accent-100)" />
                    <Text colorToken="accent-50">Fold &copy; 2024</Text>
                    <View
                        row
                        gap={10}
                        justifyContent="flex-start">
                        <SocialIcon
                            url="https://github.com/fold-dev/fold"
                            target="_blank"
                            style={{ width: 37, height: 37 }}
                            fgColor="var(--f-color-accent)"
                            bgColor="var(--f-color-accent-100)"
                        />
                        <SocialIcon
                            url="https://twitter.com/fold_dev"
                            target="_blank"
                            style={{ width: 37, height: 37 }}
                            fgColor="var(--f-color-accent)"
                            bgColor="var(--f-color-accent-100)"
                        />
                        <SocialIcon
                            url="https://www.linkedin.com/company/fold-dev"
                            target="_blank"
                            style={{ width: 37, height: 37 }}
                            fgColor="var(--f-color-accent)"
                            bgColor="var(--f-color-accent-100)"
                        />
                    </View>
                </View>
                <View
                    column
                    flex={1}
                    gap={20}
                    alignItems="flex-start">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent-300">
                        Navigation
                    </Text>
                    <List flex={1}>
                        <Li>
                            <Text
                                as="a"
                                href="#home"
                                size="xl"
                                fontWeight={400}
                                colorToken="accent-100"
                                textDecoration="none">
                                Home
                            </Text>
                        </Li>
                        <Li>
                            <Text
                                as="a"
                                href="#features"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-100">
                                Features
                            </Text>
                        </Li>
                        <Li>
                            <Text
                                as="a"
                                href="#support"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-100">
                                Support
                            </Text>
                        </Li>
                    </List>
                </View>
                <View
                    column
                    flex={1}
                    gap={20}
                    alignItems="flex-start">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent-300">
                        Helpful Links
                    </Text>
                    <List flex={1}>
                        <Li>
                            <Text
                                as="a"
                                href="/docs"
                                target="_blank"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-100">
                                Documentation
                            </Text>
                        </Li>
                        <Li>
                            <Text
                                as="a"
                                href="https://github.com/fold-dev/fold"
                                target="_blank"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-100">
                                GitHub
                            </Text>
                        </Li>
                        <Li>
                            <Text
                                as="a"
                                href="/docs/releases"
                                target="_blank"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-100">
                                Releases
                            </Text>
                        </Li>
                        <Li>
                            <Text
                                as="a"
                                href="https://github.com/orgs/fold-dev/projects/8"
                                target="_blank"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-100">
                                Roadmap
                            </Text>
                        </Li>
                    </List>
                </View>
                <View
                    column
                    flex={1}
                    gap={20}
                    alignItems="flex-start">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent-300">
                        Legal
                    </Text>
                    <List flex={1}>
                        <Li>
                            <Text
                                as="a"
                                href="/privacy-policy"
                                target="_blank"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-100">
                                Privacy Policy
                            </Text>
                        </Li>
                        <Li>
                            <Text
                                as="a"
                                href="/terms-of-use"
                                target="_blank"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-100">
                                Terms of Use
                            </Text>
                        </Li>
                    </List>
                </View>
                <View
                    column
                    flex={0.5}
                    gap={20}
                    alignItems="flex-end">
                    <Button
                        colorToken="accent-50"
                        variant="accent"
                        border="0.15rem solid white"
                        as="a"
                        target="_blank"
                        href="/docs">
                        Get Started
                    </Button>
                    <Button
                        width={200}
                        colorToken="accent-50"
                        variant="accent"
                        border="0.15rem solid white"
                        as="a"
                        target="_blank"
                        href="https://61fb81a2.sibforms.com/serve/MUIFAIdcVTZB8JLOGmoTu48YYshDwC7Uinyzu3h4sQKqJioZOki2cl7S5BCY9S_sw31Joe2i5fz6RGJfuKXy641YsGYsxkJLqlrTpZXa7H5tzVKRVbkDZvBCKpluQAp4hLkdoWVl7WsceXoIa6GPGRfxYe4tOM8IGmYO-1GfJ-DqScQ1p65akSfLMCl-fGu0sgUUYYnMUlZPn-CW">
                        Subscribe to Newsletter
                    </Button>
                </View>
            </View>
        </FoldProvider>
    )
}

Home.noLayout = true

export default Home
