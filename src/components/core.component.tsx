import {
    Accordion,
    AccordionHeading,
    AccordionItem,
    AccordionPanel,
    Attachment,
    Avatar,
    Badge,
    Button,
    ButtonGroup,
    Card,
    Copy,
    DarkModeToggle,
    Divider,
    FIX,
    Flexer,
    Grid,
    GridItem,
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
    Option,
    Options,
    Palette,
    Pill,
    Range,
    Select,
    Sparkline,
    Stack,
    Tab,
    TabList,
    Tabs,
    Text,
    Timeline,
    TimelineItem,
    View,
    useCheck,
    useCopy,
    useVisibility,
    waitForRender,
} from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import { FunctionComponent, useContext, useEffect, useRef, useState } from 'react'
import { GraphicLeft } from './graphic.component'
import CodeComponent from './code.component'

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

const Code = ({ snippet }) => {
    const { copyToClipboard } = useCopy()

    return (
        <View
            width={500}
            position="relative">
            <Button
                onClick={() => copyToClipboard(snippet)}
                zIndex={10}
                size="xs"
                style={{
                    'position': 'absolute',
                    'top': '50%',
                    'right': 10,
                    'transform': 'translateY(-50%)',
                    '--f-button-active-background': 'var(--f-color-base-600)',
                    '--f-button-border-color': 'var(--f-color-base-600)',
                    '--f-button-background-color': 'var(--f-color-base-800)',
                    '--f-button-background-color-hover': 'var(--f-color-base-600)',
                    '--f-button-color': 'var(--f-color-base-100)',
                    '--f-button-color-hover': 'var(--f-color-base-200)',
                }}>
                <IconLib
                    icon="copy"
                    size="sm"
                />
            </Button>
            <style>
                {`
                    [data-rehype-pretty-code-figure] pre { 
                        border-radius: var(--f-radius) !important;
                        border: 1px solid var(--f-color-base-700);
                    }
                `}
            </style>
            <CodeComponent
                lang="bash"
                showSnippet
                showCopy={false}
                filename="main.tsx"
                code={btoa(`
    ${snippet}`)}
            />
        </View>
    )
}

const All = () => {
    const [selected, setSelected] = useState<any>([])
    const [color, setColor] = useState(Token.ColorElectric400)
    const [value, setValue] = useState(2)
    const [option, setOption] = useState(1)

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
                                A once in a lifetime opportunity to live and work remotely in a
                                breathtaking location!
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

export const CoreComponent = () => {
    return (
        <>
            {/* core */}

            <View
                id="core"
                column
                gap={70}
                flex={1}
                width="100%"
                justifyContent="flex-start"
                alignContent="flex-start"
                alignItems="flex-start"
                m="-500px 0 0 0"
                p="600px 0 100px 0">
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
                        Open Source Core
                    </Text>
                    <Heading
                        textAlign="center"
                        colorToken="accent"
                        fontWeight={400}
                        width="80%">
                        Leverage Fold Core's 85+ components to power your next project. 
                        Fold Core is completely Open Source (MIT), and will always remain that way.
                    </Heading>
                    <Code snippet="npm i --save @fold-dev/core @fold-dev/design" />
                    {/* 
                    <View
                        row
                        gap={20}
                        m="0 0 5rem 0"
                        colorToken="accent-200">
                        <Button
                            outline
                            variant="accent">
                            Read Documentation ↗
                        </Button>
                        <Link
                            target="_blank"
                            href="/docs"
                            className="f-underline"
                            textDecoration="none">
                            GitHub ↗
                        </Link>
                    </View>
                    */}
                    <All />
                </View>
            </View>

            {/* features */}

            <View
                row
                width="100%">
                <View
                    row
                    gap="2rem"
                    width="85%"
                    radius="var(--f-radius)"
                    bgToken="accent-500"
                    position="relative"
                    style={{ overflow: 'hidden' }}
                    alignItems="flex-start">
                    <GraphicLeft
                        color={Token.ColorAccent200}
                        style={{ position: 'absolute', bottom: -100, left: -200, opacity: 0.1 }}
                        width={1107 / 2}
                        height={559 / 2}
                    />

                    <View
                        column
                        flex={1}
                        gap={30}
                        alignItems="flex-start"
                        p="5rem 0rem 5rem 5rem">
                        <Text
                            style={{ textTransform: 'uppercase' }}
                            letterSpacing={5}
                            colorToken="accent-300"
                            id="features">
                            Overview
                        </Text>
                        <Heading
                            colorToken="accent-50"
                            fontWeight={400}>
                            Made for product teams that need to move quickly.
                        </Heading>
                        <Text colorToken="accent-100">
                            Spend less time grokking build sizes & resolving dependency conflicts.
                            Fold has no other dependencies, other than React & ReactDOM.
                        </Text>
                    </View>

                    <View
                        flex={2}
                        p="5rem"
                        position="relative">
                        <Grid
                            columns={2}
                            gap="40px 40px"
                            minChildWidth={100}>
                            {[
                                {
                                    title: 'Great DX',
                                    text: 'Discover the perfect balance of component composability, CSS3 magic, and intuitive prop design – all tailored to fuel rapid iteration.',
                                },
                                {
                                    title: 'Fast',
                                    text: 'At every turn, render performance has been a consideration, because let\'s face it - apps should be snappy.',
                                },
                                {
                                    title: 'Design System',
                                    text: 'A well-crafted design system isn\'t just a luxury – it\'s a necessity. Fold ships with its own Design System based on sensible defaults.',
                                },
                                {
                                    title: 'Dark Mode',
                                    text: 'Fold supports Dark Mode out of the box, and it includes all the tools necessary for you to craft your own theme.',
                                },
                                {
                                    title: 'Zero Dependencies',
                                    text: 'Like we said, say goodbye to dependency hell. No other dependencies are used for Fold other than React & ReactDOM.',
                                },
                                {
                                    title: 'Open Source',
                                    text: 'We\'re committed to transparency and collaboration, which is why Fold Core is proudly open source software, and it always will be.',
                                },
                            ].map(({ title, text }, index) => (
                                <GridItem key={index}>
                                    <Heading
                                        as="h2"
                                        colorToken="accent-50"
                                        m="0 0 0.25rem 0">
                                        {title}
                                    </Heading>
                                    <Text colorToken="accent-100">
                                        {text}
                                    </Text>
                                </GridItem>
                            ))}
                        </Grid>
                    </View>
                </View>
            </View>

            <View
                row
                m="2rem 0 2rem 0"
                width="100%">
                <View
                    row
                    gap={50}
                    width="85%"
                    radius="var(--f-radius)"
                    position="relative"
                    style={{ overflow: 'hidden' }}
                    alignItems="flex-start">
                    <View
                        column
                        flex={1}
                        gap={30}
                        alignItems="flex-start"
                        p="5rem 0rem 5rem 5rem">
                        <Text
                            style={{ textTransform: 'uppercase' }}
                            letterSpacing={5}
                            colorToken="text-weakest"
                            id="features">
                            The art of design
                        </Text>
                        <Heading
                            colorToken="text"
                            fontWeight={400}>
                            Learn more about the design principals that underpin Fold.
                        </Heading>
                        <Link
                            href="https://www.fold.dev/docs/design-system"
                            target="_blank"
                            color="var(--f-color-text)"
                            className="f-underline"
                            textDecoration="none">
                            Read More ↗
                        </Link>
                    </View>

                    <View
                        column
                        flex={2}
                        gap={30}
                        alignItems="flex-start"
                        p="5rem 5rem 5rem 5rem">
                        <Text
                            style={{ textTransform: 'uppercase' }}
                            letterSpacing={5}
                            colorToken="text-weakest"
                            id="features">
                            Community Driven
                        </Text>
                        <Heading
                            colorToken="text"
                            fontWeight={400}>
                            Need some help getting started?
                        </Heading>
                        <Text
                            size="lg"
                            colorToken="text-weak"
                            fontWeight={400}>
                            We rely on GitHub Discussions to power our community. If you have a question or suggestion, start a discussion.
                        </Text>
                        <Link
                            target="_blank"
                            href="https://github.com/fold-dev/fold/discussions"
                            color="var(--f-color-text)"
                            className="f-underline"
                            textDecoration="none">
                            GitHub Discussions ↗
                        </Link> 
                    </View>
                </View>
            </View>
        </>
    )
}
