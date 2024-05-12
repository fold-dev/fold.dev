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
    Icon,
    IconLib,
    Image,
    Li,
    Link,
    List,
    LogoSolid,
    Menu,
    MenuItemOption,
    MenuOptionGroup,
    Navigation,
    NavigationItem,
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
import { PiAddressBookDuotone, PiCircleDashedDuotone, PiCircleHalfTiltDuotone } from 'react-icons/pi'

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

const GraphicRight = (props: any) => {
    const { style = {}, color = 'white', ...rest } = props
    return (
        <svg
            width="100%"
            height="100%"
            {...rest}
            viewBox="0 0 1456 882"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            style={{
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                strokeLinejoin: 'round',
                strokeMiterlimit: 2,
                ...style,
            }}>
            <g transform="matrix(1,0,0,1,-1581.38,-384.208)">
                <g transform="matrix(2.21027,0,0,2.02571,0,0)">
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M1545,188L1545,577L2301,-179L1897,-179L1545,188Z"
                            style={{ fill: color, fillOpacity: '0.53', fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M617,532L1221.5,-72.5L617,-72.5L617,532Z"
                            style={{ fill: color, fillOpacity: '0.53', fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M-217,15L739.5,971.5L739.5,-79L-217,-79L-217,15Z"
                            style={{ fill: color, fillOpacity: '0.53', fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M532,1083L-154,397L-154,1778L532,1083Z"
                            style={{ fill: color, fillOpacity: '0.53', fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M340,2131L1149,1322L1149,2131L340,2131Z"
                            style={{ fill: color, fillOpacity: '0.53', fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M787,1300L1135.5,951.5L1135.5,1014L787.25,1362.25L787,1300Z"
                            style={{ fill: color, fillOpacity: '0.53', fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,221.355)">
                        <path
                            d="M977,652L1164,465L1164,712L977,899L977,652Z"
                            style={{ fill: color, fillOpacity: '0.53', fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M-136,15L290.5,441.5L290.5,1060L-136.75,632.75L-136,15Z"
                            style={{ fill: color, fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M-501,1923L947.5,474.5L947.5,1077L-508.25,2532.75L-501,1923Z"
                            style={{ fill: color, fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M947,475L1182.5,239.5L947,239.5L947,475Z"
                            style={{ fill: color, fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M290,441L290,182L550.5,442.5L290,441Z"
                            style={{ fill: color, fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M1676,-156L1203,317L1203,661L2028,-164L1676,-156Z"
                            style={{ fill: color, fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M-256,2070L754,1060L754,2070L-256,2070Z"
                            style={{ fill: color, fillOpacity: '0.46', fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M99,-156L787,532L787,-146L99,-156Z"
                            style={{ fill: color, fillOpacity: '0.46', fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M998,1565L1209,1354L1209,1419L998.5,1629.5L998,1565Z"
                            style={{ fill: color, fillOpacity: '0.46', fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1254.81,218.394)">
                        <path
                            d="M802,709L1105.5,405.5L1105.5,468L801.75,771.75L802,709Z"
                            style={{ fill: color, fillOpacity: '0.46', fillRule: 'nonzero' }}
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
}

const GraphicLeft = (props: any) => {
    const { style = {}, color = 'white', ...rest } = props
    return (
        <svg
            width="100%"
            height="100%"
            {...rest}
            viewBox="0 0 1107 559"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            style={{
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                strokeLinejoin: 'round',
                strokeMiterlimit: 2,
                ...style,
            }}>
            <g transform="matrix(1,0,0,1,-146.01,-717.356)">
                <g transform="matrix(2.21027,0,0,2.02571,0,0)">
                    <g transform="matrix(-0.234394,0,0,0.160491,1134.25,217.027)">
                        <path
                            d="M3107.5,1531.25L2421.5,2217.25L3802.5,2217.25L3107.5,1531.25Z"
                            style={{ fill: color, fillOpacity: '0.53', fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1134.25,217.027)">
                        <path
                            d="M4155.5,1723.25L3346.5,914.25L4155.5,914.25L4155.5,1723.25Z"
                            style={{ fill: color, fillOpacity: '0.53', fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1134.25,217.027)">
                        <path
                            d="M3324.5,1276.25L2976,927.75L3038.5,927.75L3386.75,1276L3324.5,1276.25Z"
                            style={{ fill: color, fillOpacity: '0.53', fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1134.25,217.027)">
                        <path
                            d="M3947.5,2564.25L2499,1115.75L3101.5,1115.75L4557.25,2571.5L3947.5,2564.25Z"
                            style={{ fill: color, fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1134.25,217.027)">
                        <path
                            d="M4094.5,2319.25L3084.5,1309.25L4094.5,1309.25L4094.5,2319.25Z"
                            style={{ fill: color, fillOpacity: '0.46', fillRule: 'nonzero' }}
                        />
                    </g>
                    <g transform="matrix(-0.234394,0,0,0.160491,1134.25,217.027)">
                        <path
                            d="M3589.5,1065.25L3378.5,854.25L3443.5,854.25L3654,1064.75L3589.5,1065.25Z"
                            style={{ fill: color, fillOpacity: '0.46', fillRule: 'nonzero' }}
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
}

const All = () => {
    const [selected, setSelected] = useState<any>([])
    const [color, setColor] = useState(Token.ColorElectric400)
    const [value, setValue] = useState(5)
    const [option, setOption] = useState(1)
    /* 
    const setAccent = (color) => {
        documentObject.getElementById('custom-styles').innerHTML = colors[color]
    }

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
    */
    return (
        <View
            row
            gap="2rem"
            height="fit-content"
            width="fit-content"
            alignItems="flex-start">
            <View
                column
                gap="2rem"
                width={300}>
                <Menu
                    width={300}
                    zIndex="0"
                    shadow="none">
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
            </View>

            <View
                column
                gap="2rem"
                width={300}>
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
                        solid
                        size="sm"
                        color={Token.ColorPurple100}>
                        UI
                    </Pill>
                    <Pill
                        solid
                        size="sm"
                        color={Token.ColorBlue300}>
                        Components
                    </Pill>
                    <Pill
                        solid
                        size="sm"
                        color={Token.ColorSeagreen100}>
                        0 Dependency
                    </Pill>
                </View>

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
            </View>

            <View
                column
                width={300}
                gap="2rem"
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
                            src="photos/03.jpg"
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
            {/* <style id="custom-styles" /> */}

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
                p={10}
                gap={10}
                zIndex={10000}
                width="100%"
                position="relative"
                bgToken="accent-300">
                <Text
                    color="inherit"
                    colorToken="purple-50">
                    We've just launched! 🚀 Offering a limited time discount for our Early Access release.{' '}
                    <a
                        href="#"
                        style={{ color: 'var(--f-color-accent-100)' }}>
                        Read more below.
                    </a>
                </Text>
            </View>

            {/* header */}
            <View
                //display="none"
                //bg={`linear-gradient(175deg, ${Token.ColorElectric700}, ${Token.ColorElectric400})`}
                width="100%"
                position="relative"
                style={{ overflow: 'hidden' }}>
                <Header
                    position="relative"
                    height="fit-content"
                    //bg="transparent"
                    border="none">
                    <GraphicRight
                        style={{ position: 'absolute', top: -100, right: -100, opacity: 0.2 }}
                        height={882 / 2}
                        width={1456 / 2}
                    />

                    <View
                        row
                        gap={10}
                        width="100%"
                        p="1rem 4rem">
                        <LogoSolid color={Token.ColorElectric100} />
                        <Flexer />
                        <Navigation
//                            transparent
                            variant="navbar"
                            style={{
                                // '--f-navigation-item-background-color-hover': 'var(--f-color-accent-500)',
                                // '--f-navigation-item-background-color-active': 'var(--f-color-accent-500)',
                                // '--f-navigation-item-color': 'var(--f-color-accent-50)',
                                // '--f-navigation-item-color-hover': 'var(--f-color-accent-50)',
                                // '--f-navigation-item-color-active': 'white',
                            }}>
                            <NavigationItem>Home</NavigationItem>
                            <NavigationItem>Pro</NavigationItem>
                            <NavigationItem>Core</NavigationItem>
                            <NavigationItem>Features</NavigationItem>
                            <NavigationItem>Pricing</NavigationItem>
                            <NavigationItem>Support</NavigationItem>
                        </Navigation>
                        <Button
                            outline
                            //border="0.15rem solid white"
                            style={{
                                // '--f-button-color': 'var(--f-color-white)',
                                // '--f-button-color-hover': 'var(--f-color-accent-400)',
                            }}>
                            Documentation
                        </Button>
                        <Button
                            style={{
                                // '--f-button-color': 'var(--f-color-accent)',
                                // '--f-button-color-hover': 'var(--f-color-accent-600)',
                            }}>
                            Download
                        </Button>
                    </View>
                </Header>

                <View
                    column
                    gap={70}
                    flex={1}
                    width="100%"
                    p="4rem 0 550px 0"
                    justifyContent="stretch">
                    <View
                        column
                        flex={1}
                        gap={40}
                        width="80%"
                        position="relative">
                        <Text
                            textAlign="center"
                            style={{ textTransform: 'uppercase' }}
                            letterSpacing={5}
                            colorToken="electric-300">
                            Introducing
                        </Text>

                        <Heading
                            textAlign="center"
                            colorToken="accent-500"
                            fontWeight={700}
                            fontSize="6rem"
                            letterSpacing={-5}
                            lineHeight={0.9}>
                            The UI component library
                            <br />
                            for product teams.
                        </Heading>

                        <Heading
                            as="h3"
                            textAlign="center"
                            colorToken="accent-400"
                            fontWeight={400}
                            p="0 8rem">
                            Powerful, fully customizable React components for scaling your product to the next
                            <br />
                            level. Supercharge your dev workflow by using our zero-dependency UI components.
                        </Heading>

                        <View
                            row
                            gap={20}
                            colorToken="white">
                            <Button
                                outline
                                border="0.15rem solid var(--f-color-white)"
                                style={{
                                    // '--f-button-color': 'var(--f-color-white)',
                                    // '--f-button-color-hover': 'var(--f-color-accent-400)',
                                }}>
                                Read Documentation
                            </Button>
                            <Link
                                target="_blank"
                                href="https://61fb81a2.sibforms.com/serve/MUIFAIdcVTZB8JLOGmoTu48YYshDwC7Uinyzu3h4sQKqJioZOki2cl7S5BCY9S_sw31Joe2i5fz6RGJfuKXy641YsGYsxkJLqlrTpZXa7H5tzVKRVbkDZvBCKpluQAp4hLkdoWVl7WsceXoIa6GPGRfxYe4tOM8IGmYO-1GfJ-DqScQ1p65akSfLMCl-fGu0sgUUYYnMUlZPn-CW"
                                textDecoration="none"
                                className="f-underline"
                                m="0 -1rem 0 0"
                                colorToken="white">
                                Subscribe to Newsletter ↗
                            </Link>
                        </View>
                        
                        <Text
                            size="sm"
                            colorToken="accent-200">
                            Subscribe to our newsletter to be notified of when we launch!
                        </Text> 

                        <GraphicLeft
                            style={{ position: 'absolute', top: 400, left: -200, opacity: 0.2 }}
                            width={1107 / 2}
                            height={559 / 2}
                        />
                    </View>
                </View>
            </View>

            {/* pro */}
            
            <View
                row
                //display="none"
                height="fit-content"
                zIndex={10}
                position="relative"
                m="-500px 0 0 0">
                <View
                    bgToken="surface"
                    width="90%"
                    p="1rem"
                    radius="var(--f-radius)"
                    justifyContent="flex-start"
                    alignContent="flex-start"
                    alignItems="flex-start"
                    position="relative">
                    {/* <Options
                        m="0 auto 0rem auto"
                        animated
                        position="relative"
                        zIndex={10000}
                        selected={option}
                        onOptionChange={setOption}>
                        <Option>Kanban Board</Option>
                        <Option>Todo List</Option>
                        <Option>Calendar</Option>
                        <Option>CSV Importer</Option>
                        <Option
                            suffix={
                                <Pill
                                    color={Token.ColorAccent400}
                                    size="xs"
                                    subtle>
                                    BETA
                                </Pill>
                            }>
                            Data Grid
                        </Option> */}
                        {/* <Option suffix={<Pill color={Token.ColorAccent400} size="xs" subtle>SOON</Pill>}>Tree View</Option>
                        <Option suffix={<Pill color={Token.ColorAccent400} size="xs" subtle>SOON</Pill>}>Timeline</Option> */}
                   {/*  </Options> */}
                    <View
                        width="100%"
                        height={600}
                        position="relative"
                        zIndex={0}>
                        {/* <Usage /> */}
                    </View>
                </View>
            </View>

            {/* intro */}

            <View
                row
                gap={100}
                flex={1}
                width="100%"
                m="-500px 0 0 0"
                p="500px 0 3rem 0"
                alignItems="flex-start"
                bgToken="accent-700">
                <View
                    flex={1.5}
                    p="5rem 0rem 5rem 5rem"
                    position="relative">
                    <Grid
                        columns={4}
                        gap="40px 40px"
                        minChildWidth={100}>
                        {[
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
                                title: 'Modern',
                                text: "We're open source. Free forever, no limits.",
                            },
                            {
                                title: 'Aesthetics',
                                text: 'Fold has been designed to not only work great, but look great in any project.',
                            },
                        ].map(({ title, text }, index) => (
                            <GridItem 
                                key={index}
                                column
                                justifyContent="flex-start"
                                alignContent="flex-start"
                                alignItems="flex-start"
                                gap={10}>
                                <Icon 
                                    size="xl"
                                    icon={PiCircleHalfTiltDuotone} 
                                    color={Token.ColorAccent400}
                                />
                                <Heading
                                    fontWeight={600}
                                    colorToken="accent-100">
                                    {title}
                                </Heading>
                                <Text colorToken="accent-200">
                                    {text}
                                </Text>
                            </GridItem>
                        ))}
                    </Grid>
                </View>
                <View
                    column
                    flex={1}
                    display="none"
                    gap={30}
                    alignItems="flex-start"
                    p="5rem 5rem 5rem 0rem">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent-400"
                        id="features">
                        Level Up
                    </Text>

                    <Heading
                        huge
                        colorToken="accent-50"
                        fontWeight={800}
                        lineHeight={1}>
                        Made for product builders
                    </Heading>

                    <Heading
                        as="h3"
                        colorToken="accent-200"
                        fontWeight={400}>
                        Whether it's a SaaS product or enterprise app, we got you covered.
                    </Heading>

                    <Text
                        colorToken="accent-300"
                        fontWeight={400}>
                        Whether it's a SaaS product or enterprise app, we have you covered. Whether it's a SaaS
                        product or enterprise app, we have you covered. Whether it's a SaaS product or enterprise
                        app, we have you covered. Whether it's a SaaS product or enterprise app, we have you
                        covered. Whether it's a SaaS product or enterprise app, we have you covered. Whether it's a
                        SaaS product or enterprise app, we have you covered. Whether it's a SaaS product or
                        enterprise app, we have you covered.
                    </Text>
                </View>
            </View>

            {/* core */}

            <View
                column
                //display="none"
                gap={70}
                flex={1}
                width="100%"
                p="5rem 2rem"
                justifyContent="flex-start"
                alignContent="flex-start"
                alignItems="flex-start">
                <View
                    column
                    flex={1}
                    gap={40}
                    width="100%"
                    height="fit-content"
                    justifyContent="flex-start"
                    alignContent="flex-start"
                    position="relative"
                    p="0 0rem 0 4rem">
                    <Text
                        textAlign="center"
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent">
                        Free Forever
                    </Text>
                    <Heading
                        textAlign="center"
                        colorToken="accent-strong"
                        fontWeight={700}
                        fontSize="6rem"
                        letterSpacing={-5}
                        lineHeight={0.9}>
                        Fold Core
                    </Heading>
                    <Heading
                        as="h3"
                        textAlign="center"
                        colorToken="accent"
                        width="100%"
                        fontWeight={400}
                        p="0 5rem">
                        Leverage Fold Core's 85+ components to power your next project. Fold Core is completely{' '}
                        <br /> Open Source (MIT), and will always remain that way.
                    </Heading>
                    <View
                        row
                        gap={20}
                        colorToken="accent-200">
                        <Button
                            outline
                            variant="accent">
                            Download Now
                        </Button>
                        <Link
                            href="#"
                            className="f-underline"
                            textDecoration="none">
                            Read Documentation ↗
                        </Link>
                    </View>

                    <All />
                </View>
            </View>

            <View
                height={2}
                bgToken="base-100"
                width="100%"
            />

            {/* pro */}

            <View
                column
                gap={30}
                flex={1}
                bgToken="accent-50"
                width="100%"
                position="relative"
                style={{ overflow: 'hidden' }}
                //display="none"
                p="5rem 0">
                <GraphicRight
                    color={Token.ColorAccent200}
                    style={{ position: 'absolute', top: -100, right: -100, opacity: 0.4 }}
                    height={882 / 2}
                    width={1456 / 2}
                />

                <GraphicLeft
                    color={Token.ColorAccent200}
                    style={{ position: 'absolute', bottom: -100, left: -200, opacity: 0.4 }}
                    width={1107 / 2}
                    height={559 / 2}
                />
                <Text
                    textAlign="center"
                    style={{ textTransform: 'uppercase' }}
                    letterSpacing={5}
                    colorToken="accent">
                    Level Up
                </Text>
                <Heading
                    textAlign="center"
                    colorToken="accent-500"
                    fontWeight={700}
                    fontSize="6rem"
                    letterSpacing={-5}
                    lineHeight={0.9}>
                    Fold Pro
                </Heading>
                <Heading
                    as="h3"
                    textAlign="center"
                    colorToken="accent"
                    fontWeight={400}>
                    Get access to our Pro components to supercharge your product. Whether you're building a<br />{' '}
                    SaaS or internal dashboard, we have flexible licensing options.
                </Heading>
                <View
                    row
                    flex={1}
                    gap={20}
                    width="fit-content"
                    position="relative">
                    {new Array(2).fill(null).map((_, index) => (
                        <Card
                            key={index}
                            column
                            p={30}
                            gap={20}
                            border="none"
                            alignItems="flex-start">
                            <Heading
                                as="h3"
                                colorToken="accent"
                                fontWeight={400}>
                                Pro Early Access
                            </Heading>

                            <View
                                row
                                gap={5}
                                alignItems="flex-start">
                                <Heading
                                    jumbo
                                    fontWeight="bold"
                                    colorToken="accent-strong">
                                    279
                                </Heading>
                                <Heading
                                    as="h4"
                                    fontWeight={900}
                                    colorToken="accent-weak">
                                    USD
                                </Heading>
                            </View>

                            <List>
                                {['Kanban Board', 'Todo List', 'Calendar', 'TreeView', 'Data Grid'].map(
                                    (text, index) => (
                                        <Li
                                            key={index}
                                            row
                                            width="fit-content">
                                            <IconLib icon="check" />
                                            {text}
                                            <Pill
                                                subtle
                                                size="xs"
                                                m="0 0 0 0.5rem"
                                                color={Token.ColorAccent400}>
                                                Q2
                                            </Pill>
                                        </Li>
                                    )
                                )}
                            </List>

                            <Button
                                size="xl"
                                width="100%"
                                variant="accent">
                                Buy
                            </Button>
                        </Card>
                    ))}
                </View>
                <View row>
                    <Text colorToken="accent">
                        Pro licensing are subject to our terms & conditions and privacy policy.
                    </Text>
                </View>
            </View>

            {/* support */}

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

            {/* footer */}

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
                        bg="transparent"
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
                        bg="transparent"
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
