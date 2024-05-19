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
    waitForRender
} from '@fold-dev/core'
import { DataGridContext } from '@fold-pro/react'
import * as Token from '@fold-dev/design/tokens'
import { useLayoutEffect } from 'react'
import { FunctionComponent, useContext, useEffect, useRef, useState } from 'react'
import CodeComponent from './components/code.component'
import { DataGrid, DataGridHeader, DataGridTypes, dataGridState, dispatchDataGridEvent, setExperimentalGlobalRowCellComponents } from '@fold-pro/react'

const countries = [
    'United States',
    'Canada',
    'Brazil',
    'Mexico',
    'United Kingdom',
    'France',
    'Germany',
    'Italy',
    'Spain',
    'Australia',
    'Japan',
    'China',
    'India',
    'Russia',
    'South Korea',
    'South Africa',
    'Turkey',
    'Saudi Arabia',
    'Argentina',
    'Netherlands',
    'Switzerland',
    'Sweden',
    'Norway',
    'Denmark',
    'Belgium',
    'Austria',
    'Ireland',
    'Portugal',
    'Greece',
    'Thailand',
    'Indonesia',
    'Malaysia',
    'Philippines',
    'Vietnam',
    'Egypt',
    'Israel',
    'United Arab Emirates',
    'Singapore',
    'New Zealand',
    'Finland',
    'Poland',
    'Czech Republic',
    'Hungary',
    'Romania',
    'Chile',
    'Colombia',
    'Peru',
    'Venezuela',
    'Ukraine',
    'Nigeria',
]

export const CountrySelect = (props: any) => {
    const { id, edit, value, options, error, warning, onEdit, onCancel } = props
    const { refocus } = useContext(DataGridContext)
    const [selected, setSelected] = useState<any>([value])
    const ref = useRef<any>(null)

    const handleSelect = (option, dismiss) => {
        setSelected([option.key])
        onEdit(option.key)
        refocus()
    }

    const handleFilter = (text: string) => {
        // do an API call to get more options
    }

    useEffect(() => {
        if (edit) {
            waitForRender(() => {
                ref.current.focus()
                ref.current.childNodes[0].childNodes[0].click()
            })
        }
    }, [edit])

    return (
        <>
            {edit && (
                <View
                    ref={ref}
                    position="absolute"
                    zIndex={2}
                    style={{ inset: 0 }}
                    bgToken="surface-inverse"
                    width="100"
                    height="100%">
                    <Select
                        border="none"
                        shadow="none"
                        radius={0}
                        width="100%"
                        inputProps={{ height: 39 }}
                        style={{
                            '--f-focus': 'none',
                            '--f-input-border-radius': '0px',
                            '--f-input-border-width': '0px',
                        }}
                        placeholder="Select a timezone"
                        selected={selected}
                        options={countries.map((country) => ({
                            key: country,
                            label: country,
                        }))}
                        onSelect={handleSelect}
                        onFilter={handleFilter}
                        prefix={<IconLib icon="time" />}
                        suffix={<IconLib icon="chevron-down" />}
                        filterDelay={500}
                    />
                </View>
            )}

            {!edit && (
                <Text
                    width="100"
                    height="100%"
                    row
                    className="f-ellipsis"
                    p="0 0 0 0.75rem"
                    justifyContent="flex-start">
                    {value}
                </Text>
            )}
        </>
    )
}

export const widths = [
    '100px',
    '200px',
    '150px',
    '150px',
    '150px',
    '150px',
    '150px',
    '150px',
    '150px',
    '150px',
    '150px',
    '150px',
]

export const columns1: DataGridTypes.Column[] = [
    {
        id: 'index',
        label: 'Index',
    },
    {
        id: 'customer-id',
        label: 'Customer ID',
        prefix: (
            <IconLib
                icon="user"
                size="sm"
            />
        ),
        menu: true,
    },
    {
        id: 'city',
        label: 'City',
        menu: true,
    },
    {
        id: 'country',
        label: 'Country',
        menu: true,
    },
    {
        id: 'first-name',
        label: 'First Name',
        disabled: true,
        menu: false,
    },
    {
        id: 'last-name',
        label: 'Last Name',
        menu: true,
    },
    {
        id: 'company',
        label: 'Company',
        menu: true,
    },
    {
        id: 'phone-1',
        label: 'Phone 1',
        suffix: <Badge size="sm">Pri</Badge>,
    },
    {
        id: 'phone-2',
        label: 'Phone 2',
        suffix: <Badge size="sm">Sec</Badge>,
    },
    {
        id: 'email',
        label: 'Email',
        menu: true,
    },
    {
        id: 'date',
        label: 'Date',
        menu: true,
    },
    {
        id: 'website',
        label: 'Website',
        menu: true,
    },
]

export const FooterCell = (props: any) => {
    return (
        <View
            row
            height="100%"
            justifyContent="flex-start"
            p="0 0 0 0.75rem"
            style={{ cursor: 'default' }}>
            <Text
                size="sm"
                colorToken="text-weaker">
                {props.label}
            </Text>
        </View>
    )
}

export const footer = [
    {
        id: 'fc1',
        label: '',
    },
    {
        id: 'fc2',
        label: '',
    },
    {
        id: 'fc3',
        label: '',
    },
    {
        id: 'fc4',
        label: 'Selectable',
    },
    {
        id: 'fc6',
        label: '',
    },
    {
        id: 'fc7',
        label: '',
    },
    {
        id: 'fc8',
        label: '',
    },
    {
        id: 'fc9',
        label: '',
    },
    {
        id: 'fc10',
        label: '',
    },
    {
        id: 'fc11',
        label: '',
    },
    {
        id: 'fc12',
        label: '',
    },
    {
        id: 'fc13',
        label: '',
    },
]

export const _rowCellComponents: (FunctionComponent | undefined)[] = [
    undefined,
    undefined,
    undefined,
    undefined,
    CountrySelect,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
]

export const rows1 = [
    [
        {
            value: '1',
        },
        {
            value: 'EB54EF1154C3A78',
        },
        {
            value: 'Lake Jeffborough',
        },
        {
            value: 'Norway',
        },
        {
            value: 'Heather',
        },
        {
            value: 'Callahan',
        },
        {
            value: 'Mosley-David',
        },
        {
            value: '043-797-5229',
        },
        {
            value: '915.112.1727',
        },
        {
            value: 'urangel@espinoza-francis.net',
        },
        {
            value: '2020-08-26',
        },
        {
            value: 'http://www.escobar.org/',
        },
    ],
    [
        {
            value: '2',
        },
        {
            value: '10dAcafEBbA5FcA',
        },
        {
            value: 'Aaronville',
            color: Token.ColorDarkYellow500,
            icon: 'sun',
        },
        {
            value: 'Andorra',
        },
        {
            value: 'Kristina',
        },
        {
            value: 'Ferrell',
        },
        {
            value: 'Horn, Shepard and Watson',
        },
        {
            value: '932-062-1802',
        },
        {
            value: '(209)172-7124x3651',
        },
        {
            value: 'xreese@hall-donovan.com',
        },
        {
            value: '2020-04-27',
        },
        {
            value: 'https://tyler-pugh.info/',
        },
    ],
    [
        {
            value: '3',
        },
        {
            value: '67DAB15Ebe4BE4a',
        },
        {
            value: 'East Jordan',
        },
        {
            value: 'Nepal',
        },
        {
            value: 'Briana',
        },
        {
            value: 'Andersen',
        },
        {
            value: 'Irwin-Oneal',
        },
        {
            value: '8352752061',
        },
        {
            value: '(567)135-1918',
        },
        {
            value: 'haleybraun@blevins-sexton.com',
        },
        {
            value: '2022-03-22',
        },
        {
            value: 'https://www.mack-bell.net/',
        },
    ],
    [
        {
            value: '4',
        },
        {
            value: '6d350C5E5eDB4EE',
        },
        {
            value: 'East Kristintown',
        },
        {
            value: 'Northern Mariana Islands',
        },
        {
            value: 'Patty',
        },
        {
            value: 'Ponce',
        },
        {
            value: 'Richardson Group',
        },
        {
            value: '302.398.3833',
        },
        {
            value: '196-189-7767x770',
        },
        {
            value: 'hohailey@anthony.com',
        },
        {
            value: '2020-07-02',
        },
        {
            value: 'https://delacruz-freeman.org/',
        },
    ],
    [
        {
            value: '5',
        },
        {
            value: '5820deAdCF23EFe',
        },
        {
            value: 'Andresmouth',
        },
        {
            value: 'Macao',
        },
        {
            value: 'Kathleen',
        },
        {
            value: 'Mccormick',
        },
        {
            value: 'Carson-Burch',
        },
        {
            value: '001-184-153-9683x1497',
        },
        {
            value: '552.051.2979x342',
        },
        {
            value: 'alvaradojesse@rangel-shields.com',
        },
        {
            value: '2021-01-17',
        },
        {
            value: 'https://welch.info/',
        },
    ],
    [
        {
            value: '6',
        },
        {
            value: 'E1CDEaC63fDd5aA',
        },
        {
            value: 'Lake Madelineburgh',
        },
        {
            value: 'Senegal',
        },
        {
            value: 'Trevor',
        },
        {
            value: 'Lee',
        },
        {
            value: 'Maddox Group',
        },
        {
            value: '+1-134-348-0265x9132',
        },
        {
            value: '+1-313-882-4167',
        },
        {
            value: 'briangriffin@chang.org',
        },
        {
            value: '2021-08-13',
        },
        {
            value: 'https://www.roberts.com/',
        },
    ],
    [
        {
            value: '7',
        },
        {
            value: '3e1187fCcebC8d2',
        },
        {
            value: 'West Ralph',
        },
        {
            value: 'Uzbekistan',
        },
        {
            value: 'Mathew',
        },
        {
            value: 'Hoffman',
        },
        {
            value: 'Bender, Pittman and Kidd',
        },
        {
            value: '842.380.1168',
        },
        {
            value: '(178)178-5447x32603',
        },
        {
            value: 'bauergerald@morrison.com',
        },
        {
            value: '2020-04-09',
        },
        {
            value: 'http://www.holt.com/',
        },
    ],
    [
        {
            value: '8',
        },
        {
            value: '47C5cEE243c9A7b',
        },
        {
            value: 'Ambershire',
            color: Token.ColorElectric400,
            icon: 'moon',
        },
        {
            value: 'Falkland Islands (Malvinas)',
        },
        {
            value: 'Glenn',
        },
        {
            value: 'Wiggins',
        },
        {
            value: 'Glenn-Harvey',
        },
        {
            value: '245-207-5608x563',
        },
        {
            value: '8806867785',
        },
        {
            value: 'changkellie@howell.com',
        },
        {
            value: '2021-04-02',
        },
        {
            value: 'http://carlson.com/',
        },
    ],
    [
        {
            value: '9',
        },
        {
            value: 'cacaD68a5e4BF4b',
        },
        {
            value: 'Barrettview',
        },
        {
            value: 'Zimbabwe',
        },
        {
            value: 'Bruce',
        },
        {
            value: 'Payne',
        },
        {
            value: 'Arroyo, Cain and Hudson',
        },
        {
            value: '391.313.4649x42910',
        },
        {
            value: '166.227.5055',
        },
        {
            value: 'mayerjerome@hurst-graham.net',
        },
        {
            value: '2020-11-26',
        },
        {
            value: 'https://www.glenn-snow.com/',
        },
    ],
    [
        {
            value: '10',
        },
        {
            value: '436b9c41cfb1fa3',
        },
        {
            value: 'New Rickey',
        },
        {
            value: 'Ukraine',
        },
        {
            value: 'Brendan',
        },
        {
            value: 'Franco',
        },
        {
            value: 'Schaefer, Blair and Shaffer',
        },
        {
            value: '001-315-224-3556',
        },
        {
            value: '254-621-7128x7573',
        },
        {
            value: 'kentryan@stone-oneill.com',
        },
        {
            value: '2021-06-29',
        },
        {
            value: 'http://ruiz.com/',
        },
    ],
    [
        {
            value: '11',
        },
        {
            value: '9653ca648e2E414',
        },
        {
            value: 'Lake Bobton',
        },
        {
            value: 'Mauritania',
        },
        {
            value: 'Martin',
        },
        {
            value: 'Hawkins',
        },
        {
            value: 'Lopez Inc',
        },
        {
            value: '001-402-567-1320',
        },
        {
            value: '732-908-7945',
        },
        {
            value: 'danielbuckley@hatfield.info',
        },
        {
            value: '2021-05-02',
        },
        {
            value: 'https://www.newman.com/',
        },
    ],
    [
        {
            value: '12',
        },
        {
            value: 'e586A2D67bcdB48',
        },
        {
            value: 'Orrland',
        },
        {
            value: 'Gambia',
        },
        {
            value: 'Sara',
        },
        {
            value: 'Shaffer',
        },
        {
            value: 'Dudley, Coleman and Green',
        },
        {
            value: '4229986278',
        },
        {
            value: '001-028-824-7381x56737',
        },
        {
            value: 'gabrielaleach@rose.net',
        },
        {
            value: '2021-04-07',
        },
        {
            value: 'https://www.hoffman-rubio.com/',
        },
    ],
    [
        {
            value: '13',
        },
        {
            value: 'c388ECa44FFe37c',
        },
        {
            value: 'South Elizabeth',
        },
        {
            value: 'Sweden',
        },
        {
            value: 'Dave',
        },
        {
            value: 'Moran',
        },
        {
            value: 'Harrell-Donovan',
        },
        {
            value: '575.006.7250x9748',
        },
        {
            value: '262-029-1096',
        },
        {
            value: 'cartermallory@chung.com',
        },
        {
            value: '2020-02-28',
        },
        {
            value: 'https://hinton.info/',
        },
    ],
    [
        {
            value: '14',
        },
        {
            value: 'f8dddbf9CD6FF92',
        },
        {
            value: 'Pamelatown',
        },
        {
            value: 'Netherlands',
        },
        {
            value: 'Glen',
        },
        {
            value: 'Hammond',
        },
        {
            value: 'Schaefer, Chung and Lin',
        },
        {
            value: '001-887-543-3745x055',
        },
        {
            value: '001-955-888-1987x09071',
        },
        {
            value: 'lweeks@hooper.org',
        },
        {
            value: '2022-03-03',
        },
        {
            value: 'https://bush-huynh.org/',
        },
    ],
    [
        {
            value: '15',
        },
        {
            value: '86Df56BFCc0a7CA',
        },
        {
            value: 'Lake Seth',
        },
        {
            value: 'Dominican Republic',
        },
        {
            value: 'Catherine',
        },
        {
            value: 'Blackwell',
        },
        {
            value: 'Mack, Garcia and Schaefer',
        },
        {
            value: '001-915-961-8896x5744',
        },
        {
            value: '(310)185-3032x0974',
        },
        {
            value: 'calhounalisha@hardin.net',
        },
        {
            value: '2021-03-30',
        },
        {
            value: 'https://barker-bishop.info/',
        },
    ],
    [
        {
            value: '16',
        },
        {
            value: '2cfDE68A372cC7A',
        },
        {
            value: 'Mannstad',
        },
        {
            value: 'Belize',
        },
        {
            value: 'Larry',
        },
        {
            value: 'Newton',
        },
        {
            value: 'Downs PLC',
        },
        {
            value: '(216)514-1412',
        },
        {
            value: '001-449-365-5864x147',
        },
        {
            value: 'ypayne@gaines.biz',
        },
        {
            value: '2020-08-09',
        },
        {
            value: 'https://figueroa.com/',
        },
    ],
    [
        {
            value: '17',
        },
        {
            value: '14CBc0BDfbE6FEA',
        },
        {
            value: 'East Diamond',
        },
        {
            value: 'Cook Islands',
        },
        {
            value: 'Danny',
        },
        {
            value: 'Archer',
        },
        {
            value: 'Castro, Haney and Hanna',
        },
        {
            value: '8416559700',
        },
        {
            value: '001-212-234-3412x91164',
        },
        {
            value: 'nwu@brady-chen.com',
        },
        {
            value: '2021-05-21',
        },
        {
            value: 'http://www.callahan.net/',
        },
    ],
    [
        {
            value: '18',
        },
        {
            value: '48b3ACBfD6A5cdC',
        },
        {
            value: 'New Gwendolyn',
        },
        {
            value: 'Saint Kitts and Nevis',
        },
        {
            value: 'Kim',
        },
        {
            value: 'Griffin',
        },
        {
            value: 'Tyler-Levine',
        },
        {
            value: '597.367.9499x5429',
        },
        {
            value: '506.141.4174x6326',
        },
        {
            value: 'harold11@mullen.org',
        },
        {
            value: '2021-06-02',
        },
        {
            value: 'http://www.mclaughlin-hubbard.net/',
        },
    ],
    [
        {
            value: '19',
        },
        {
            value: 'dB52fA7Bec665C1',
        },
        {
            value: 'Martinezstad',
        },
        {
            value: 'French Southern Territories',
        },
        {
            value: 'Kristin',
        },
        {
            value: 'Valencia',
        },
        {
            value: 'Liu-Douglas',
        },
        {
            value: '443-671-1725x7073',
        },
        {
            value: '6244311825',
        },
        {
            value: 'andrewsanders@marks.com',
        },
        {
            value: '2021-04-17',
        },
        {
            value: 'http://www.myers.com/',
        },
    ],
    [
        {
            value: '20',
        },
        {
            value: 'e99DcfDaDac8a06',
        },
        {
            value: 'Port Adrianport',
        },
        {
            value: 'Singapore',
        },
        {
            value: 'Hannah',
        },
        {
            value: 'Ramsey',
        },
        {
            value: 'Hicks-Duran',
        },
        {
            value: '(822)795-8754x29384',
        },
        {
            value: '(769)638-7026x967',
        },
        {
            value: 'amy99@booker.com',
        },
        {
            value: '2020-12-30',
        },
        {
            value: 'http://www.larsen-floyd.biz/',
        },
    ],
    [
        {
            value: '21',
        },
        {
            value: '28D7BcC82d076F2',
        },
        {
            value: 'Wallston',
        },
        {
            value: 'Congo',
        },
        {
            value: 'Barry',
        },
        {
            value: 'Meadows',
        },
        {
            value: 'Weiss, King and Morrison',
        },
        {
            value: '629.168.7457',
        },
        {
            value: '001-092-440-6540',
        },
        {
            value: 'basschristian@faulkner.com',
        },
        {
            value: '2020-01-01',
        },
        {
            value: 'https://chavez.com/',
        },
    ],
    [
        {
            value: '22',
        },
        {
            value: 'Beb0D2e4BA54a51',
        },
        {
            value: 'Port Martha',
        },
        {
            value: 'Zimbabwe',
        },
        {
            value: 'Roy',
        },
        {
            value: 'Brock',
        },
        {
            value: 'Becker-Woodard',
        },
        {
            value: '001-102-869-0189x1414',
        },
        {
            value: '303.040.0780x2768',
        },
        {
            value: 'ldelacruz@spence.com',
        },
        {
            value: '2021-06-27',
        },
        {
            value: 'https://www.norman.org/',
        },
    ],
    [
        {
            value: '23',
        },
        {
            value: 'EFe791B6Ce06A1A',
        },
        {
            value: 'East Johnnystad',
        },
        {
            value: 'Tonga',
        },
        {
            value: 'Patricia',
        },
        {
            value: 'Pope',
        },
        {
            value: 'Zavala-Garcia',
        },
        {
            value: '775.341.8738x21724',
        },
        {
            value: '(786)324-4817x9051',
        },
        {
            value: 'hayleyritter@price.net',
        },
        {
            value: '2020-05-19',
        },
        {
            value: 'http://www.moyer.com/',
        },
    ],
    [
        {
            value: '24',
        },
        {
            value: 'Ebe45ac4Ae5e20C',
        },
        {
            value: 'Lake Isaiahview',
        },
        {
            value: 'Costa Rica',
        },
        {
            value: 'Alan',
        },
        {
            value: 'Stanton',
        },
        {
            value: 'Munoz and Sons',
        },
        {
            value: '(510)542-0174x853',
        },
        {
            value: '995.008.2375x973',
        },
        {
            value: 'yhebert@hays-rivera.com',
        },
        {
            value: '2020-01-23',
        },
        {
            value: 'http://young.com/',
        },
    ],
    [
        {
            value: '25',
        },
        {
            value: 'E31a9699DF2A0eF',
        },
        {
            value: 'West Guy',
        },
        {
            value: 'Oman',
        },
        {
            value: 'Philip',
        },
        {
            value: 'Flynn',
        },
        {
            value: 'Morton Ltd',
        },
        {
            value: '881-632-0721x11032',
        },
        {
            value: '(881)992-9151x74921',
        },
        {
            value: 'austinhobbs@briggs.com',
        },
        {
            value: '2020-09-05',
        },
        {
            value: 'http://huerta-cordova.info/',
        },
    ],
    [
        {
            value: '26',
        },
        {
            value: '0748BdEFeb4834F',
        },
        {
            value: 'New Maxhaven',
        },
        {
            value: 'Saint Helena',
        },
        {
            value: 'Mackenzie',
        },
        {
            value: 'Williamson',
        },
        {
            value: 'Hart-Klein',
        },
        {
            value: '+1-605-640-1833x70183',
        },
        {
            value: '656.931.4990',
        },
        {
            value: 'zramos@haney.org',
        },
        {
            value: '2020-03-06',
        },
        {
            value: 'http://www.allison-clements.com/',
        },
    ],
    [
        {
            value: '27',
        },
        {
            value: 'fEB05baEc5ba41d',
        },
        {
            value: 'Lake Sallyport',
        },
        {
            value: 'Cameroon',
        },
        {
            value: 'Emily',
        },
        {
            value: 'Calderon',
        },
        {
            value: 'Todd-Acosta',
        },
        {
            value: '038.443.6100',
        },
        {
            value: '618.908.5890',
        },
        {
            value: 'shelley82@jarvis.com',
        },
        {
            value: '2021-06-17',
        },
        {
            value: 'http://www.larsen.org/',
        },
    ],
    [
        {
            value: '28',
        },
        {
            value: 'b9B3B5f1ba40FD3',
        },
        {
            value: 'Campbellshire',
        },
        {
            value: 'Tonga',
        },
        {
            value: 'Roberta',
        },
        {
            value: 'Walton',
        },
        {
            value: 'Lamb, Little and Frazier',
        },
        {
            value: '805-974-3346x026',
        },
        {
            value: '001-324-540-6599x3227',
        },
        {
            value: 'sharigriffin@cameron.com',
        },
        {
            value: '2020-11-15',
        },
        {
            value: 'https://quinn.biz/',
        },
    ],
    [
        {
            value: '29',
        },
        {
            value: 'Fc0Bb9CEbeE57b0',
        },
        {
            value: 'Marilyntown',
        },
        {
            value: 'Panama',
        },
        {
            value: 'Steve',
        },
        {
            value: 'Mack',
        },
        {
            value: 'Cooper Ltd',
        },
        {
            value: '(079)726-1523',
        },
        {
            value: '061.039.5513',
        },
        {
            value: 'rpace@huynh.com',
        },
        {
            value: '2021-03-01',
        },
        {
            value: 'http://www.macdonald-lyons.com/',
        },
    ],
    [
        {
            value: '30',
        },
        {
            value: 'B5e2c7Cc5b2D5C0',
        },
        {
            value: 'Port Dariushaven',
        },
        {
            value: 'Guinea',
        },
        {
            value: 'Pedro',
        },
        {
            value: 'Jacobson',
        },
        {
            value: 'Hodge-Potts',
        },
        {
            value: '187.217.1436x5325',
        },
        {
            value: '075.320.9732',
        },
        {
            value: 'emullins@simpson-christensen.com',
        },
        {
            value: '2021-09-02',
        },
        {
            value: 'http://www.guerra-armstrong.com/',
        },
    ],
    [
        {
            value: '31',
        },
        {
            value: '3D72031D22EB2aC',
        },
        {
            value: 'Carolinetown',
        },
        {
            value: 'Micronesia',
        },
        {
            value: 'Daniel',
        },
        {
            value: 'Harper',
        },
        {
            value: 'Gray-Collier',
        },
        {
            value: '4779933630',
        },
        {
            value: '+1-544-607-3630x7852',
        },
        {
            value: 'patricialeach@hernandez.biz',
        },
        {
            value: '2020-07-06',
        },
        {
            value: 'http://www.barajas-hendrix.com/',
        },
    ],
    [
        {
            value: '32',
        },
        {
            value: '84d3FaE8D176217',
        },
        {
            value: 'West Bernardbury',
        },
        {
            value: 'Niger',
        },
        {
            value: 'Danny',
        },
        {
            value: 'Mayer',
        },
        {
            value: 'Serrano, Carr and Hurst',
        },
        {
            value: '+1-232-090-7002x568',
        },
        {
            value: '(764)539-0967x909',
        },
        {
            value: 'mindy15@fuentes.org',
        },
        {
            value: '2020-07-15',
        },
        {
            value: 'http://perkins.com/',
        },
    ],
    [
        {
            value: '33',
        },
        {
            value: '942FAAB8898c6Fc',
        },
        {
            value: 'New Ross',
        },
        {
            value: 'Bosnia and Herzegovina',
        },
        {
            value: 'Jasmine',
        },
        {
            value: 'Owens',
        },
        {
            value: 'Stafford-Shannon',
        },
        {
            value: '(685)119-0956',
        },
        {
            value: '5024074926',
        },
        {
            value: 'jake39@little.com',
        },
        {
            value: '2022-01-02',
        },
        {
            value: 'https://mckee-hill.net/',
        },
    ],
    [
        {
            value: '34',
        },
        {
            value: 'F0EdAbc86aac953',
        },
        {
            value: 'Lake Caitlynville',
        },
        {
            value: 'Bouvet Island (Bouvetoya)',
        },
        {
            value: 'Ashley',
        },
        {
            value: 'Davies',
        },
        {
            value: 'Griffin-Ware',
        },
        {
            value: '754.390.8594x022',
        },
        {
            value: '188-155-9696x06994',
        },
        {
            value: 'mhudson@hardin.com',
        },
        {
            value: '2021-03-09',
        },
        {
            value: 'https://www.bray.com/',
        },
    ],
    [
        {
            value: '35',
        },
        {
            value: '2f4976cc8F8Cf7D',
        },
        {
            value: 'Cardenasport',
        },
        {
            value: 'Svalbard & Jan Mayen Islands',
        },
        {
            value: 'Shawn',
        },
        {
            value: 'Cruz',
        },
        {
            value: 'Daniel and Sons',
        },
        {
            value: '309-608-9907',
        },
        {
            value: '(615)894-4814x344',
        },
        {
            value: 'nlane@kane-pennington.com',
        },
        {
            value: '2022-05-03',
        },
        {
            value: 'https://www.tran.net/',
        },
    ],
    [
        {
            value: '36',
        },
        {
            value: 'fDbB79FAB142707',
        },
        {
            value: 'West Makaylaton',
        },
        {
            value: 'Seychelles',
        },
        {
            value: 'Francis',
        },
        {
            value: 'Hubbard',
        },
        {
            value: 'Barron Group',
        },
        {
            value: '+1-895-654-6918x3859',
        },
        {
            value: '(182)766-9394x4641',
        },
        {
            value: 'savannah10@simpson.com',
        },
        {
            value: '2021-03-17',
        },
        {
            value: 'https://www.velazquez-wright.com/',
        },
    ],
    [
        {
            value: '37',
        },
        {
            value: 'E75a5870e952cd6',
        },
        {
            value: 'West Tamara',
        },
        {
            value: "Cote d'Ivoire",
        },
        {
            value: 'Richard',
        },
        {
            value: 'Bennett',
        },
        {
            value: 'Fuentes LLC',
        },
        {
            value: '795-520-6262x14294',
        },
        {
            value: '+1-519-673-2725x0502',
        },
        {
            value: 'cristian16@hill-beard.com',
        },
        {
            value: '2021-01-12',
        },
        {
            value: 'https://www.frederick.com/',
        },
    ],
    [
        {
            value: '38',
        },
        {
            value: '4C8E6AA7Ced5BAF',
        },
        {
            value: 'Kerryburgh',
        },
        {
            value: 'Netherlands',
        },
        {
            value: 'Vanessa',
        },
        {
            value: 'Hansen',
        },
        {
            value: 'Watkins-Romero',
        },
        {
            value: '+1-134-667-1175x8813',
        },
        {
            value: '+1-928-497-1358x88633',
        },
        {
            value: 'jasmineaustin@whitehead.info',
        },
        {
            value: '2020-01-14',
        },
        {
            value: 'https://www.graves.info/',
        },
    ],
    [
        {
            value: '39',
        },
        {
            value: 'ec75Fb9C6A0DcF1',
        },
        {
            value: 'Nataliestad',
        },
        {
            value: 'Korea',
        },
        {
            value: 'Joyce',
        },
        {
            value: 'Foster',
        },
        {
            value: 'Randolph LLC',
        },
        {
            value: '655.928.6486',
        },
        {
            value: '+1-966-669-6464',
        },
        {
            value: 'samuel97@wyatt.com',
        },
        {
            value: '2020-10-29',
        },
        {
            value: 'https://www.schmitt.com/',
        },
    ],
    [
        {
            value: '40',
        },
        {
            value: 'C2378a0b119b425',
        },
        {
            value: 'New Petershire',
        },
        {
            value: 'Japan',
        },
        {
            value: 'Marc',
        },
        {
            value: 'Medina',
        },
        {
            value: 'Pearson PLC',
        },
        {
            value: '1874666215',
        },
        {
            value: '237-063-6496x65292',
        },
        {
            value: 'karlgarrett@fischer.biz',
        },
        {
            value: '2020-03-02',
        },
        {
            value: 'http://www.nicholson.org/',
        },
    ],
    [
        {
            value: '41',
        },
        {
            value: '53D27CbE3b3CAf7',
        },
        {
            value: 'Meyerbury',
        },
        {
            value: 'French Southern Territories',
        },
        {
            value: 'Darren',
        },
        {
            value: 'Santana',
        },
        {
            value: 'Guerra LLC',
        },
        {
            value: '+1-145-916-2809x14415',
        },
        {
            value: '440.474.1607',
        },
        {
            value: 'biancahenry@hernandez.org',
        },
        {
            value: '2021-06-11',
        },
        {
            value: 'http://www.gates.net/',
        },
    ],
    [
        {
            value: '42',
        },
        {
            value: '3bcBa3CBB7EF52c',
        },
        {
            value: 'Cathyview',
        },
        {
            value: 'United States Minor Outlying Islands',
        },
        {
            value: 'Mario',
        },
        {
            value: 'Moreno',
        },
        {
            value: 'Robles and Sons',
        },
        {
            value: '001-044-197-2628x678',
        },
        {
            value: '001-592-920-6308x2332',
        },
        {
            value: 'marisa13@hickman.com',
        },
        {
            value: '2022-02-12',
        },
        {
            value: 'https://www.gillespie.biz/',
        },
    ],
    [
        {
            value: '43',
        },
        {
            value: 'DFcebf7063e11ac',
        },
        {
            value: 'West Marthaview',
        },
        {
            value: 'Bouvet Island (Bouvetoya)',
        },
        {
            value: 'Daniel',
        },
        {
            value: 'Bush',
        },
        {
            value: 'Delacruz-Rosario',
        },
        {
            value: '891.885.1826',
        },
        {
            value: '309.937.8982x96964',
        },
        {
            value: 'billymorris@lambert-irwin.com',
        },
        {
            value: '2020-02-13',
        },
        {
            value: 'http://www.zhang.com/',
        },
    ],
    [
        {
            value: '44',
        },
        {
            value: 'fdd4F120dFFaaBA',
        },
        {
            value: 'South Brandi',
        },
        {
            value: 'Guinea',
        },
        {
            value: 'Vanessa',
        },
        {
            value: 'Davenport',
        },
        {
            value: 'Barrera Group',
        },
        {
            value: '014.539.1066x2855',
        },
        {
            value: '001-586-506-1699x536',
        },
        {
            value: 'barry91@howe.info',
        },
        {
            value: '2020-05-10',
        },
        {
            value: 'https://www.davenport.com/',
        },
    ],
    [
        {
            value: '45',
        },
        {
            value: 'FA9584DEE86bBbE',
        },
        {
            value: 'Port Rickeyport',
        },
        {
            value: 'Isle of Man',
        },
        {
            value: 'Donald',
        },
        {
            value: 'Terry',
        },
        {
            value: 'Beasley-Perez',
        },
        {
            value: '(381)211-7562x9960',
        },
        {
            value: '905.051.0894x82461',
        },
        {
            value: 'kdavies@owen-humphrey.info',
        },
        {
            value: '2021-01-04',
        },
        {
            value: 'http://www.grimes-summers.com/',
        },
    ],
    [
        {
            value: '46',
        },
        {
            value: 'fF8bc9C72D6c38b',
        },
        {
            value: 'Hendricksfort',
        },
        {
            value: 'Indonesia',
        },
        {
            value: 'Jill',
        },
        {
            value: 'Esparza',
        },
        {
            value: 'Herrera and Sons',
        },
        {
            value: '001-218-793-7724x2810',
        },
        {
            value: '253.141.8420',
        },
        {
            value: 'gregghendricks@conner-weiss.info',
        },
        {
            value: '2020-09-24',
        },
        {
            value: 'http://harris.net/',
        },
    ],
    [
        {
            value: '47',
        },
        {
            value: '6ADbBf35FBb6ebc',
        },
        {
            value: 'Serranoland',
        },
        {
            value: 'San Marino',
        },
        {
            value: 'Tyler',
        },
        {
            value: 'Richard',
        },
        {
            value: 'Cline Inc',
        },
        {
            value: '(030)748-4061',
        },
        {
            value: '(518)939-6401',
        },
        {
            value: 'alfredbradford@perry.com',
        },
        {
            value: '2022-04-17',
        },
        {
            value: 'https://www.delacruz.com/',
        },
    ],
    [
        {
            value: '48',
        },
        {
            value: 'a75eDF85cC17DfB',
        },
        {
            value: 'New Virginiamouth',
        },
        {
            value: 'Guyana',
        },
        {
            value: 'Sonya',
        },
        {
            value: 'Moore',
        },
        {
            value: 'Riggs, Pena and Hubbard',
        },
        {
            value: '488.725.7447x7670',
        },
        {
            value: '001-918-561-3514x2980',
        },
        {
            value: 'ngilmore@bush.net',
        },
        {
            value: '2021-12-25',
        },
        {
            value: 'https://www.tyler.com/',
        },
    ],
    [
        {
            value: '49',
        },
        {
            value: 'E95Ce6e2d241660',
        },
        {
            value: 'West Craig',
        },
        {
            value: 'Sudan',
        },
        {
            value: 'Jonathon',
        },
        {
            value: 'Gillespie',
        },
        {
            value: 'Harrell Ltd',
        },
        {
            value: '(335)620-5477x4774',
        },
        {
            value: '353.020.5510',
        },
        {
            value: 'vgilbert@romero.biz',
        },
        {
            value: '2020-06-23',
        },
        {
            value: 'https://www.long-hickman.com/',
        },
    ],
    [
        {
            value: '50',
        },
        {
            value: '3E4Ac207eAE0d2E',
        },
        {
            value: 'West Nicolas',
        },
        {
            value: 'Thailand',
        },
        {
            value: 'Ryan',
        },
        {
            value: 'Lin',
        },
        {
            value: 'Harrell-Frank',
        },
        {
            value: '284-076-2518x537',
        },
        {
            value: '6934137441',
        },
        {
            value: 'dgould@graham-winters.com',
        },
        {
            value: '2021-10-06',
        },
        {
            value: 'https://johns-sharp.com/',
        },
    ],
    [
        {
            value: '51',
        },
        {
            value: 'cFB0d4B976ef0Ca',
        },
        {
            value: 'Paigeland',
        },
        {
            value: 'Guernsey',
        },
        {
            value: 'Joel',
        },
        {
            value: 'Thomas',
        },
        {
            value: 'Lawrence-Robles',
        },
        {
            value: '001-566-338-3073',
        },
        {
            value: '7104971640',
        },
        {
            value: 'fsuarez@cooper-montes.biz',
        },
        {
            value: '2021-10-21',
        },
        {
            value: 'http://mcgrath.org/',
        },
    ],
    [
        {
            value: '52',
        },
        {
            value: 'a0eb3D0bDcfB8Bd',
        },
        {
            value: 'Lake Joshua',
        },
        {
            value: 'Isle of Man',
        },
        {
            value: 'Judith',
        },
        {
            value: 'Fischer',
        },
        {
            value: 'Oconnor, Glover and Park',
        },
        {
            value: '6570280667',
        },
        {
            value: '001-929-759-1013x923',
        },
        {
            value: 'natasha83@delacruz-edwards.com',
        },
        {
            value: '2020-01-26',
        },
        {
            value: 'https://spencer.com/',
        },
    ],
    [
        {
            value: '53',
        },
        {
            value: 'A8205E5c66709D5',
        },
        {
            value: 'East Kaitlynfort',
        },
        {
            value: 'Micronesia',
        },
        {
            value: 'Roy',
        },
        {
            value: 'West',
        },
        {
            value: 'Finley Group',
        },
        {
            value: '953.571.7565',
        },
        {
            value: '001-400-483-7933',
        },
        {
            value: 'mbonilla@hampton.com',
        },
        {
            value: '2020-01-22',
        },
        {
            value: 'https://www.lindsey.org/',
        },
    ],
    [
        {
            value: '54',
        },
        {
            value: '047653F3f21E8B3',
        },
        {
            value: 'Perezburgh',
        },
        {
            value: 'Malaysia',
        },
        {
            value: 'Rebekah',
        },
        {
            value: 'Morton',
        },
        {
            value: 'Love, Farmer and Reid',
        },
        {
            value: '(238)946-3127x901',
        },
        {
            value: '248-817-0962x74779',
        },
        {
            value: 'basskaylee@lynn-gill.biz',
        },
        {
            value: '2021-08-19',
        },
        {
            value: 'https://www.leblanc.com/',
        },
    ],
    [
        {
            value: '55',
        },
        {
            value: '83d9accaD6AFBF9',
        },
        {
            value: 'South Jeremiahberg',
        },
        {
            value: 'Nauru',
        },
        {
            value: 'Jeremy',
        },
        {
            value: 'Guerra',
        },
        {
            value: 'Gamble Group',
        },
        {
            value: '001-343-604-8248x84492',
        },
        {
            value: '142.473.8437x8627',
        },
        {
            value: 'lfaulkner@villanueva.com',
        },
        {
            value: '2022-05-12',
        },
        {
            value: 'https://giles-newton.com/',
        },
    ],
    [
        {
            value: '56',
        },
        {
            value: '95CA5DdFfd2279E',
        },
        {
            value: 'Salinasmouth',
        },
        {
            value: 'Solomon Islands',
        },
        {
            value: 'Brett',
        },
        {
            value: 'Shelton',
        },
        {
            value: 'Beard Group',
        },
        {
            value: '153.551.1879x3694',
        },
        {
            value: '402.445.0497x146',
        },
        {
            value: 'maystiffany@davidson.com',
        },
        {
            value: '2022-04-21',
        },
        {
            value: 'https://richmond.com/',
        },
    ],
    [
        {
            value: '57',
        },
        {
            value: 'a0003BeCa9da94D',
        },
        {
            value: 'Dorseyfurt',
        },
        {
            value: 'Egypt',
        },
        {
            value: 'Gilbert',
        },
        {
            value: 'Meza',
        },
        {
            value: 'Howard Ltd',
        },
        {
            value: '250-821-7086x670',
        },
        {
            value: '565.200.3181x012',
        },
        {
            value: 'katie69@romero.net',
        },
        {
            value: '2020-11-12',
        },
        {
            value: 'https://nolan.com/',
        },
    ],
    [
        {
            value: '58',
        },
        {
            value: 'fcC8D0ea0ace725',
        },
        {
            value: 'Hoodchester',
        },
        {
            value: 'Tokelau',
        },
        {
            value: 'Kurt',
        },
        {
            value: 'Tapia',
        },
        {
            value: 'Adkins-Dixon',
        },
        {
            value: '+1-102-370-7901x263',
        },
        {
            value: '(677)168-7134',
        },
        {
            value: 'valerie35@olsen.com',
        },
        {
            value: '2020-10-11',
        },
        {
            value: 'http://www.fernandez-fisher.com/',
        },
    ],
    [
        {
            value: '59',
        },
        {
            value: 'F6De59D2A51BBbE',
        },
        {
            value: 'Masseyhaven',
        },
        {
            value: 'Palestinian Territory',
        },
        {
            value: 'Sarah',
        },
        {
            value: 'Powell',
        },
        {
            value: 'Pearson-Choi',
        },
        {
            value: '586.224.7039',
        },
        {
            value: '171-888-6974',
        },
        {
            value: 'ivanhiggins@charles-estrada.com',
        },
        {
            value: '2021-09-30',
        },
        {
            value: 'https://www.mcneil.com/',
        },
    ],
    [
        {
            value: '60',
        },
        {
            value: '30Cb5c2C58061ef',
        },
        {
            value: 'New Dianeborough',
        },
        {
            value: 'Bulgaria',
        },
        {
            value: 'Andrea',
        },
        {
            value: 'Irwin',
        },
        {
            value: 'Mayer, Taylor and Boyer',
        },
        {
            value: '+1-328-232-6506x9973',
        },
        {
            value: '248-913-6702',
        },
        {
            value: 'xcallahan@cantu.com',
        },
        {
            value: '2021-06-26',
        },
        {
            value: 'https://www.nguyen.com/',
        },
    ],
    [
        {
            value: '61',
        },
        {
            value: 'b365Aae63b2916B',
        },
        {
            value: 'Mikestad',
        },
        {
            value: 'Aruba',
        },
        {
            value: 'Aimee',
        },
        {
            value: 'Hodge',
        },
        {
            value: 'Bennett and Sons',
        },
        {
            value: '(140)932-8681x897',
        },
        {
            value: '(368)009-8825x60430',
        },
        {
            value: 'melvindrake@friedman-bradley.com',
        },
        {
            value: '2021-10-22',
        },
        {
            value: 'https://www.cain-allen.com/',
        },
    ],
    [
        {
            value: '62',
        },
        {
            value: '43f683C3361eb65',
        },
        {
            value: 'Lukemouth',
        },
        {
            value: 'Indonesia',
        },
        {
            value: 'Doris',
        },
        {
            value: 'Drake',
        },
        {
            value: 'Rich, Edwards and Miranda',
        },
        {
            value: '184-508-9386x4549',
        },
        {
            value: '+1-839-084-8619x4015',
        },
        {
            value: 'carpentergary@vance-weeks.com',
        },
        {
            value: '2022-03-03',
        },
        {
            value: 'https://www.snow.org/',
        },
    ],
    [
        {
            value: '63',
        },
        {
            value: '5C533BB11bc8BDD',
        },
        {
            value: 'West Jim',
        },
        {
            value: 'Libyan Arab Jamahiriya',
        },
        {
            value: 'Randy',
        },
        {
            value: 'Tran',
        },
        {
            value: 'Vazquez-Orr',
        },
        {
            value: '903-264-0524',
        },
        {
            value: '(446)543-4319',
        },
        {
            value: 'duartejohnathan@pennington.com',
        },
        {
            value: '2020-09-02',
        },
        {
            value: 'https://www.knight.net/',
        },
    ],
    [
        {
            value: '64',
        },
        {
            value: '6b3cbCf4dc29720',
        },
        {
            value: 'East Deborah',
        },
        {
            value: 'Turks and Caicos Islands',
        },
        {
            value: 'Allison',
        },
        {
            value: 'Webster',
        },
        {
            value: 'Hayden-Villanueva',
        },
        {
            value: '341-979-6141x4780',
        },
        {
            value: '0812968881',
        },
        {
            value: 'zbrock@blevins-payne.com',
        },
        {
            value: '2020-03-10',
        },
        {
            value: 'http://www.rush.biz/',
        },
    ],
    [
        {
            value: '65',
        },
        {
            value: 'DC63a02BDa14af4',
        },
        {
            value: 'East Nicolechester',
        },
        {
            value: 'Nepal',
        },
        {
            value: 'Nicholas',
        },
        {
            value: 'Mcclure',
        },
        {
            value: 'Roy, Myers and Fox',
        },
        {
            value: '040-706-1022x241',
        },
        {
            value: '909.727.3778',
        },
        {
            value: 'phelpsandres@hartman-cooper.org',
        },
        {
            value: '2021-03-15',
        },
        {
            value: 'http://www.levine.com/',
        },
    ],
    [
        {
            value: '66',
        },
        {
            value: 'd8cCD02E409D5F2',
        },
        {
            value: 'Noblefort',
        },
        {
            value: 'Bulgaria',
        },
        {
            value: 'Gene',
        },
        {
            value: 'Wu',
        },
        {
            value: 'Chambers, Nielsen and David',
        },
        {
            value: '+1-956-239-0423x80834',
        },
        {
            value: '001-414-382-8351',
        },
        {
            value: 'nataliefarley@richardson.com',
        },
        {
            value: '2021-10-05',
        },
        {
            value: 'http://carrillo.com/',
        },
    ],
    [
        {
            value: '67',
        },
        {
            value: 'Ca492c76A52Da9F',
        },
        {
            value: 'Lake Aaron',
        },
        {
            value: 'Mongolia',
        },
        {
            value: 'Kelli',
        },
        {
            value: 'Bridges',
        },
        {
            value: 'Black, Richardson and Sandoval',
        },
        {
            value: '5657167326',
        },
        {
            value: '220.834.4618x14578',
        },
        {
            value: 'daisyblair@walsh-holmes.org',
        },
        {
            value: '2021-12-05',
        },
        {
            value: 'https://www.trevino.info/',
        },
    ],
    [
        {
            value: '68',
        },
        {
            value: 'fA99aEF4eE28aD8',
        },
        {
            value: 'North Elizabeth',
        },
        {
            value: 'Grenada',
        },
        {
            value: 'Summer',
        },
        {
            value: 'Washington',
        },
        {
            value: 'Benjamin LLC',
        },
        {
            value: '3412967650',
        },
        {
            value: '9330266446',
        },
        {
            value: 'thomasnicholas@blankenship-ford.com',
        },
        {
            value: '2021-09-26',
        },
        {
            value: 'https://www.wagner.org/',
        },
    ],
    [
        {
            value: '69',
        },
        {
            value: 'B5F6D5dB5eBDfcE',
        },
        {
            value: 'Johnchester',
        },
        {
            value: 'Ireland',
        },
        {
            value: 'Ann',
        },
        {
            value: 'Ayala',
        },
        {
            value: 'Walton-Carter',
        },
        {
            value: '965-375-4761x8648',
        },
        {
            value: '+1-892-497-8783x07375',
        },
        {
            value: 'hburke@duke-mcmahon.com',
        },
        {
            value: '2020-12-05',
        },
        {
            value: 'https://www.copeland.org/',
        },
    ],
    [
        {
            value: '70',
        },
        {
            value: '9bb3fF7Dfc04f9c',
        },
        {
            value: 'New Sarah',
        },
        {
            value: 'Papua New Guinea',
        },
        {
            value: 'Alfred',
        },
        {
            value: 'Hooper',
        },
        {
            value: 'Pope-Mcpherson',
        },
        {
            value: '(050)541-0069',
        },
        {
            value: '080.240.2511',
        },
        {
            value: 'lonnielittle@hoffman-meadows.com',
        },
        {
            value: '2020-03-15',
        },
        {
            value: 'http://moyer.com/',
        },
    ],
    [
        {
            value: '71',
        },
        {
            value: '21C1a2E1e9Cf6cC',
        },
        {
            value: 'West Erikview',
        },
        {
            value: 'Netherlands',
        },
        {
            value: 'Brandon',
        },
        {
            value: 'Robbins',
        },
        {
            value: 'Stark, Deleon and Mann',
        },
        {
            value: '422-099-2274x577',
        },
        {
            value: '634.035.7567x20178',
        },
        {
            value: 'qmcdaniel@cruz.net',
        },
        {
            value: '2020-12-20',
        },
        {
            value: 'https://www.acevedo-macdonald.net/',
        },
    ],
    [
        {
            value: '72',
        },
        {
            value: 'eB53B2FaD51aeF7',
        },
        {
            value: 'Port Spencer',
        },
        {
            value: 'Congo',
        },
        {
            value: 'Wesley',
        },
        {
            value: 'Cobb',
        },
        {
            value: 'Bruce LLC',
        },
        {
            value: '480-924-1413',
        },
        {
            value: '6577055396',
        },
        {
            value: 'austinvang@glenn.com',
        },
        {
            value: '2021-06-22',
        },
        {
            value: 'https://deleon.com/',
        },
    ],
    [
        {
            value: '73',
        },
        {
            value: '5Baa5DE49cA3d9B',
        },
        {
            value: 'West Tanner',
        },
        {
            value: 'Korea',
        },
        {
            value: 'Caleb',
        },
        {
            value: 'Salas',
        },
        {
            value: 'Hughes Ltd',
        },
        {
            value: '284-269-8039x213',
        },
        {
            value: '2291250365',
        },
        {
            value: 'shortfrederick@cobb.net',
        },
        {
            value: '2020-01-12',
        },
        {
            value: 'https://www.roach.com/',
        },
    ],
    [
        {
            value: '74',
        },
        {
            value: 'C2f62DB8E8e0fAB',
        },
        {
            value: 'Damonborough',
        },
        {
            value: "Cote d'Ivoire",
        },
        {
            value: 'George',
        },
        {
            value: 'Long',
        },
        {
            value: 'Cochran, Sweeney and Miles',
        },
        {
            value: '292.292.1103x0768',
        },
        {
            value: '(252)863-4103x848',
        },
        {
            value: 'yolanda69@rosario.com',
        },
        {
            value: '2022-01-09',
        },
        {
            value: 'http://www.blankenship.com/',
        },
    ],
    [
        {
            value: '75',
        },
        {
            value: '592e432eBdCaa33',
        },
        {
            value: 'Port Charlene',
        },
        {
            value: 'Tuvalu',
        },
        {
            value: 'Taylor',
        },
        {
            value: 'Kemp',
        },
        {
            value: 'Webb, Bauer and Mcknight',
        },
        {
            value: '001-768-645-9632x3754',
        },
        {
            value: '+1-671-771-9340x9839',
        },
        {
            value: 'michaela80@russell.com',
        },
        {
            value: '2020-07-21',
        },
        {
            value: 'http://www.terrell.com/',
        },
    ],
    [
        {
            value: '76',
        },
        {
            value: 'eAEc7BAD1D2B9FA',
        },
        {
            value: 'Guymouth',
        },
        {
            value: 'Kuwait',
        },
        {
            value: 'Steve',
        },
        {
            value: 'Horn',
        },
        {
            value: 'Choi and Sons',
        },
        {
            value: '001-599-157-7138',
        },
        {
            value: '9954083334',
        },
        {
            value: 'ashley39@garrison.com',
        },
        {
            value: '2020-02-26',
        },
        {
            value: 'https://www.rodgers.biz/',
        },
    ],
    [
        {
            value: '77',
        },
        {
            value: 'a54A4C6DDB7df29',
        },
        {
            value: 'Karlaview',
        },
        {
            value: 'Azerbaijan',
        },
        {
            value: 'Danielle',
        },
        {
            value: 'Spears',
        },
        {
            value: 'Conner-Braun',
        },
        {
            value: '+1-616-392-7862x70763',
        },
        {
            value: '8792516311',
        },
        {
            value: 'alan50@hobbs.info',
        },
        {
            value: '2021-09-13',
        },
        {
            value: 'https://valdez-li.org/',
        },
    ],
    [
        {
            value: '78',
        },
        {
            value: 'BDCCEdccFd0FB6a',
        },
        {
            value: 'Josephtown',
        },
        {
            value: 'Israel',
        },
        {
            value: 'Jillian',
        },
        {
            value: 'Ortiz',
        },
        {
            value: 'Bean-Fuentes',
        },
        {
            value: '+1-696-155-3546',
        },
        {
            value: '001-790-882-2468x3663',
        },
        {
            value: 'hsantos@lopez.info',
        },
        {
            value: '2020-05-21',
        },
        {
            value: 'http://whitehead.info/',
        },
    ],
    [
        {
            value: '79',
        },
        {
            value: 'e8f4b4D1FcF5Fc3',
        },
        {
            value: 'Lake Brittney',
        },
        {
            value: 'Uzbekistan',
        },
        {
            value: 'Joshua',
        },
        {
            value: 'Ortega',
        },
        {
            value: 'Herman, Preston and Spence',
        },
        {
            value: '+1-734-076-1901x55246',
        },
        {
            value: '001-569-506-8227',
        },
        {
            value: 'robbinsgordon@dyer-kim.info',
        },
        {
            value: '2021-09-29',
        },
        {
            value: 'http://barr-salas.org/',
        },
    ],
    [
        {
            value: '80',
        },
        {
            value: '45c6AB9eF9d8ADd',
        },
        {
            value: 'Younghaven',
        },
        {
            value: 'Kiribati',
        },
        {
            value: 'Sherry',
        },
        {
            value: 'Cantu',
        },
        {
            value: 'Everett and Sons',
        },
        {
            value: '001-273-927-5314x56481',
        },
        {
            value: '3058537703',
        },
        {
            value: 'meghanfernandez@patel-todd.com',
        },
        {
            value: '2020-11-02',
        },
        {
            value: 'http://schaefer.com/',
        },
    ],
    [
        {
            value: '81',
        },
        {
            value: '7D8EFBe9cB0ceb9',
        },
        {
            value: 'Lake Laura',
        },
        {
            value: 'France',
        },
        {
            value: 'Eric',
        },
        {
            value: 'Pittman',
        },
        {
            value: 'Galvan-Stafford',
        },
        {
            value: '001-877-800-2510x09728',
        },
        {
            value: '572-530-6860',
        },
        {
            value: 'gabrielarobbins@hawkins-bernard.com',
        },
        {
            value: '2020-09-05',
        },
        {
            value: 'http://www.benson-keller.com/',
        },
    ],
    [
        {
            value: '82',
        },
        {
            value: 'fCBFFE1D1D7EbFf',
        },
        {
            value: 'North Nathanielton',
        },
        {
            value: 'Brunei Darussalam',
        },
        {
            value: 'Wanda',
        },
        {
            value: 'Cowan',
        },
        {
            value: 'Cherry-Yates',
        },
        {
            value: '001-205-431-0213x5471',
        },
        {
            value: '(917)935-2327x3320',
        },
        {
            value: 'qlarson@berry.biz',
        },
        {
            value: '2021-09-24',
        },
        {
            value: 'http://www.potts-conrad.com/',
        },
    ],
    [
        {
            value: '83',
        },
        {
            value: '8Dde1eb3cf408B5',
        },
        {
            value: 'Shannonbury',
        },
        {
            value: 'Djibouti',
        },
        {
            value: 'John',
        },
        {
            value: 'Chen',
        },
        {
            value: 'Michael, Mayo and Bishop',
        },
        {
            value: '(733)256-6473x125',
        },
        {
            value: '1822755459',
        },
        {
            value: 'hmorgan@olson.com',
        },
        {
            value: '2020-04-30',
        },
        {
            value: 'https://ibarra.com/',
        },
    ],
    [
        {
            value: '84',
        },
        {
            value: '3ACcE1d8aBB63ae',
        },
        {
            value: 'Rickeychester',
        },
        {
            value: 'Italy',
        },
        {
            value: 'Francisco',
        },
        {
            value: 'Stanley',
        },
        {
            value: 'Brewer, Trevino and Key',
        },
        {
            value: '001-090-771-1995x209',
        },
        {
            value: '198.341.1742',
        },
        {
            value: 'charlottemercer@hensley.net',
        },
        {
            value: '2020-12-12',
        },
        {
            value: 'http://watson-frye.org/',
        },
    ],
    [
        {
            value: '85',
        },
        {
            value: 'C68542ae05DAC48',
        },
        {
            value: 'Port Jon',
        },
        {
            value: 'Macao',
        },
        {
            value: 'Dillon',
        },
        {
            value: 'Gallegos',
        },
        {
            value: 'Lindsey LLC',
        },
        {
            value: '836.527.9927x34601',
        },
        {
            value: '056-265-8970x614',
        },
        {
            value: 'escobarisabella@harrell-santiago.info',
        },
        {
            value: '2020-10-13',
        },
        {
            value: 'https://kirk-skinner.com/',
        },
    ],
    [
        {
            value: '86',
        },
        {
            value: '1bD2d3D04d9C9E8',
        },
        {
            value: 'Stephenfort',
        },
        {
            value: 'Ghana',
        },
        {
            value: 'Rebekah',
        },
        {
            value: 'Pruitt',
        },
        {
            value: 'Dunlap-Chambers',
        },
        {
            value: '001-443-474-4235x51256',
        },
        {
            value: '358.297.8985',
        },
        {
            value: 'jessica36@hart.com',
        },
        {
            value: '2021-08-17',
        },
        {
            value: 'https://www.mccormick.biz/',
        },
    ],
    [
        {
            value: '87',
        },
        {
            value: '21296ee3eE1Ff8a',
        },
        {
            value: 'Petersbury',
        },
        {
            value: 'Equatorial Guinea',
        },
        {
            value: 'Marcia',
        },
        {
            value: 'Vaughan',
        },
        {
            value: 'Yu-Roy',
        },
        {
            value: '742.373.3173',
        },
        {
            value: '001-302-878-6175x08344',
        },
        {
            value: 'ellen80@bonilla.com',
        },
        {
            value: '2020-10-22',
        },
        {
            value: 'http://jefferson.com/',
        },
    ],
    [
        {
            value: '88',
        },
        {
            value: 'CD73bc8Fa7Be64E',
        },
        {
            value: 'Butlerberg',
        },
        {
            value: 'Heard Island and McDonald Islands',
        },
        {
            value: 'Sierra',
        },
        {
            value: 'Bautista',
        },
        {
            value: 'Lynch Inc',
        },
        {
            value: '001-209-997-8162x72724',
        },
        {
            value: '759.775.4540',
        },
        {
            value: 'chavezrandall@mckinney-stafford.net',
        },
        {
            value: '2020-05-27',
        },
        {
            value: 'https://www.anthony.net/',
        },
    ],
    [
        {
            value: '89',
        },
        {
            value: '5DC66d7c82fB027',
        },
        {
            value: 'Bradstad',
        },
        {
            value: 'Heard Island and McDonald Islands',
        },
        {
            value: 'Kevin',
        },
        {
            value: 'Chase',
        },
        {
            value: 'Morris, Hurst and Mccarty',
        },
        {
            value: '863-881-8404x487',
        },
        {
            value: '+1-348-270-4520x9230',
        },
        {
            value: 'gravesgrace@molina.org',
        },
        {
            value: '2020-06-23',
        },
        {
            value: 'http://wise-mendez.com/',
        },
    ],
    [
        {
            value: '90',
        },
        {
            value: 'D064cF5496671B5',
        },
        {
            value: 'Julianmouth',
        },
        {
            value: 'Liechtenstein',
        },
        {
            value: 'Ronnie',
        },
        {
            value: 'Hurley',
        },
        {
            value: 'Rush-Baird',
        },
        {
            value: '(347)486-6963',
        },
        {
            value: '(837)301-1992x73450',
        },
        {
            value: 'hhuerta@morris-case.info',
        },
        {
            value: '2021-04-25',
        },
        {
            value: 'https://zimmerman.com/',
        },
    ],
    [
        {
            value: '91',
        },
        {
            value: 'bA72ec0ec4fDA49',
        },
        {
            value: 'Jadeland',
        },
        {
            value: 'Korea',
        },
        {
            value: 'Justin',
        },
        {
            value: 'Huang',
        },
        {
            value: 'Warren, Davenport and Hanna',
        },
        {
            value: '883-237-4786x25921',
        },
        {
            value: '(374)342-8039x622',
        },
        {
            value: 'ydavid@potter.com',
        },
        {
            value: '2022-05-16',
        },
        {
            value: 'http://sampson-marshall.biz/',
        },
    ],
    [
        {
            value: '92',
        },
        {
            value: 'b40Ff873cC39CaE',
        },
        {
            value: 'Lake Danberg',
        },
        {
            value: 'United Arab Emirates',
        },
        {
            value: 'Phyllis',
        },
        {
            value: 'Cummings',
        },
        {
            value: 'Hickman-Wells',
        },
        {
            value: '395.317.5194x78424',
        },
        {
            value: '+1-505-416-9028x00300',
        },
        {
            value: 'colealexander@turner.biz',
        },
        {
            value: '2020-09-20',
        },
        {
            value: 'http://www.atkinson-may.com/',
        },
    ],
    [
        {
            value: '93',
        },
        {
            value: 'feABEd13C7DcEDD',
        },
        {
            value: 'Damonside',
        },
        {
            value: 'Greece',
        },
        {
            value: 'Collin',
        },
        {
            value: 'Jackson',
        },
        {
            value: 'Floyd, Moyer and Hodges',
        },
        {
            value: '(106)631-6431x8449',
        },
        {
            value: '+1-440-944-1793x91144',
        },
        {
            value: 'carpenterkylie@chambers-frost.com',
        },
        {
            value: '2021-02-11',
        },
        {
            value: 'http://henry.com/',
        },
    ],
    [
        {
            value: '94',
        },
        {
            value: 'D6bAddB76237B9F',
        },
        {
            value: 'Maryland',
        },
        {
            value: 'Heard Island and McDonald Islands',
        },
        {
            value: 'Terry',
        },
        {
            value: 'Chapman',
        },
        {
            value: 'Huffman LLC',
        },
        {
            value: '+1-020-368-6749x8950',
        },
        {
            value: '(631)274-6737x26447',
        },
        {
            value: 'adrian55@gardner-gaines.com',
        },
        {
            value: '2022-04-14',
        },
        {
            value: 'https://www.gutierrez-lloyd.com/',
        },
    ],
    [
        {
            value: '95',
        },
        {
            value: '0fdCdc9c49C089A',
        },
        {
            value: 'Knightmouth',
        },
        {
            value: 'Mayotte',
        },
        {
            value: 'Greg',
        },
        {
            value: 'Cortez',
        },
        {
            value: 'Barajas, Hale and Ferguson',
        },
        {
            value: '579.250.1047',
        },
        {
            value: '001-620-909-8580x84663',
        },
        {
            value: 'bonillaalex@cervantes.org',
        },
        {
            value: '2021-03-20',
        },
        {
            value: 'http://www.mayer.com/',
        },
    ],
    [
        {
            value: '96',
        },
        {
            value: '538Bdaef89F7672',
        },
        {
            value: 'South Veronicafurt',
        },
        {
            value: 'Fiji',
        },
        {
            value: 'Elaine',
        },
        {
            value: 'Hendrix',
        },
        {
            value: 'Goodwin, Lambert and Lowery',
        },
        {
            value: '3010334267',
        },
        {
            value: '111-173-4785x11133',
        },
        {
            value: 'maureen18@barr.org',
        },
        {
            value: '2020-12-24',
        },
        {
            value: 'http://mccarty-meza.info/',
        },
    ],
    [
        {
            value: '97',
        },
        {
            value: 'F231DF54939Fa4C',
        },
        {
            value: 'Sheriville',
        },
        {
            value: 'Cuba',
        },
        {
            value: 'Marvin',
        },
        {
            value: 'Buchanan',
        },
        {
            value: 'Lowe-Mathis',
        },
        {
            value: '058-381-7608',
        },
        {
            value: '+1-912-237-4307x878',
        },
        {
            value: 'ocole@sanders-lowery.net',
        },
        {
            value: '2020-04-22',
        },
        {
            value: 'http://www.price.com/',
        },
    ],
    [
        {
            value: '98',
        },
        {
            value: '5EDb197afE9965F',
        },
        {
            value: 'Marcoburgh',
        },
        {
            value: 'Brazil',
        },
        {
            value: 'Paul',
        },
        {
            value: 'Moore',
        },
        {
            value: 'White-George',
        },
        {
            value: '(451)968-9182',
        },
        {
            value: '+1-454-876-8759x02495',
        },
        {
            value: 'spencerbright@powell.biz',
        },
        {
            value: '2021-12-10',
        },
        {
            value: 'https://wall-reid.com/',
        },
    ],
    [
        {
            value: '99',
        },
        {
            value: '4f0B0BdAEDeC2F8',
        },
        {
            value: 'Holdenchester',
        },
        {
            value: 'Chad',
        },
        {
            value: 'Grant',
        },
        {
            value: 'Tanner',
        },
        {
            value: 'Downs Group',
        },
        {
            value: '001-155-288-8390x9946',
        },
        {
            value: '+1-073-135-3038x2148',
        },
        {
            value: 'dawncoffey@barker.com',
        },
        {
            value: '2022-05-15',
        },
        {
            value: 'https://newton-esparza.net/',
        },
    ],
]

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
        <View width={500} position="relative">
            <Button
                onClick={() => copyToClipboard(snippet)}
                zIndex={10}
                size="xs"
                style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    right: 10, 
                    transform: 'translateY(-50%)',
                    '--f-button-active-background': 'var(--f-color-base-600)',
                    '--f-button-border-color': 'var(--f-color-base-600)',
                    '--f-button-background-color': 'var(--f-color-base-800)',
                    '--f-button-background-color-hover': 'var(--f-color-base-600)',
                    '--f-button-color': 'var(--f-color-base-100)',
                    '--f-button-color-hover': 'var(--f-color-base-200)',
                }}>
                <IconLib icon="copy" size="sm" />
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

export const GraphicRight = (props: any) => {
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

export const GraphicLeft = (props: any) => {
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

export const Borderless = () => {
    const [columnWidths, setColumnWidths] = useState(widths)
    const [columns, setColumns] = useState<DataGridTypes.Column[]>(columns1)
    const [footerColumns, setFooterColumns] = useState<DataGridTypes.Column[]>(footer)
    const [rows, setRows] = useState<DataGridTypes.Cell[][]>(rows1)

    const handleColumnMove = ({ origin, target }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleColumnMove({ origin, target })
    }

    const handleRowMove = ({ origin, target }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleRowMove({ origin, target })
    }

    const handleColumnClick = (index, column: DataGridTypes.Column) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleColumnClick(index, column)
    }

    const handleCellUpdate = ({ value, row, col }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleCellUpdate({ value, row, col })
    }

    const handleCellDelete = ({ row, col }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleCellDelete({ row, col })
    }

    useLayoutEffect(() => {
        // Why do we do this?
        // Specifying a custom component on each row cell is supported,
        // however to optimise render performance (for larger datasets),
        // a global array of custom components is stored that is accessible
        // to each row cell at render time. We store it as a global variable
        // to not pollute the Context (for now).
        setExperimentalGlobalRowCellComponents(_rowCellComponents)
    }, [])

    return (
        <div
            style={
                {
                    '--f-data-grid-row-padding-left': '3rem',
                    '--f-data-grid-row-padding-right': '3px',
                } as any
            }>
            <DataGrid
                border="0"
                id="instance-1"
                // provider:
                defaultCellSelection={{}}
                defaultRowSelection={{}}
                draggableColumns
                draggableRows
                maxRowsSelectable={undefined}
                singleRowSelect={false}
                onSelect={({ rows, cols }: any) => null}
                // core:
                // height={467}
                // variant="default"
                variant="virtual"
                virtual={{
                    rows: 10,
                    rowHeight: 40,
                    paddingTop: 40,
                    paddingBottom: 30,
                }}
                hideCheckbox={false}
                hideGutter={false}
                rows={rows}
                columnWidths={columnWidths}
                header={
                    <DataGridHeader
                        resizableColumns
                        columns={columns}
                        onColumnClick={handleColumnClick}
                        onWidthChange={(index, width) =>
                            setColumnWidths(columnWidths.map((w, i) => (i == index ? width : w)))
                        }
                    />
                }
                footer={
                    <DataGridHeader
                        hideCheckbox
                        component={FooterCell}
                        columns={footerColumns}
                        style={{
                            '--f-data-grid-cell-height': '30px',
                            'bottom': 0,
                        }}
                    />
                }
                pinFirst
                pinLast
                onCellUpdate={handleCellUpdate}
                onCellDelete={handleCellDelete}
                onColumnMove={handleColumnMove}
                onRowMove={handleRowMove}
                toolbar={({ rowSelection, cellSelection }) => (
                    <View
                        row
                        position="absolute"
                        bgToken="surface-inverse"
                        colorToken="text-on-color"
                        p="1rem 2rem"
                        radius="var(--f-radius)"
                        shadow="var(--f-shadow-xl)"
                        zIndex={1000}
                        gap={10}
                        display={
                            !Object.values(rowSelection).length && Object.values(cellSelection).length < 2
                                ? 'none'
                                : 'flex'
                        }
                        style={{ bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
                        <Text color="inherit">
                            {Object.values(rowSelection).length} rows, &nbsp;
                            {Object.values(cellSelection).length} cells
                        </Text>
                        <Icon
                            icon={FIX}
                            className="f-buttonize"
                            onClick={() => {
                                dispatchDataGridEvent('select-cells', { instanceId: 'instance-1' })
                                dispatchDataGridEvent('select-rows', { instanceId: 'instance-1' })
                            }}
                        />
                    </View>
                )}
            />
        </div>
    )
}

function Home() {
    const [showChild, setShowChild] = useState(false)
    const [option, setOption] = useState(1)
    const [seats, setSeats] = useState(1)

    const clamp = (price, min, max) => {
        return Math.min(Math.max(price, min), max)
    }

    const formatCurrency = (amount) => {
        return Intl.NumberFormat('en-US', {
            notation: 'standard',
            maximumFractionDigits: 2,
        }).format(amount)
    }

    const pricingEnterprise = (p = 699) => {
        const price = Math.min(Math.max(seats, 1), 30) * p
        return formatCurrency(clamp(price, 0, 99999))
    }

    const pricingSaas = (p = 2449) => {
        const price = Math.min(Math.max(seats, 1), 30) * p
        return formatCurrency(clamp(price, 0, 99999))
    }

    const pricingIndie = (p = 349) => {
        const price = Math.min(Math.max(seats, 1), 30) * p
        return formatCurrency(clamp(price, 0, 9999))
    }


    useEffect(() => {
        setShowChild(true)
    }, [])

    if (!showChild) return null

    return (
        <>
            <View
                width="100%"
                p="111px 0 0 0"
                m="-111px 0 0 0"
                position="relative"
                style={{ overflow: 'hidden' }}
                bg={`linear-gradient(175deg, ${Token.ColorElectric700}, ${Token.ColorElectric400})`}>
                <GraphicRight
                    style={{ position: 'absolute', top: -100, right: -100, opacity: 0.2 }}
                    height={882 / 2}
                    width={1456 / 2}
                />

                <View
                    column
                    id="home"
                    gap={70}
                    flex={1}
                    width="100%"
                    p="4rem 0 600px 0"
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
                            colorToken="white"
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
                            colorToken="accent-50"
                            fontWeight={400}
                            p="0 8rem">
                            Powerful, fully customizable React components for scaling your product to the next
                            level. Supercharge your dev workflow by using our zero-dependency UI components.
                        </Heading>

                        <View
                            row
                            gap={20}
                            colorToken="white">
                            <Button
                                outline
                                as="a"
                                href="#pro"
                                border="0.15rem solid var(--f-color-white)"
                                style={{
                                    '--f-button-color': 'var(--f-color-white)',
                                    '--f-button-color-hover': 'var(--f-color-accent-400)',
                                }}>
                                Buy Now
                            </Button>
                            <Link
                                href="/docs"
                                target="_blank"
                                textDecoration="none"
                                className="f-underline"
                                m="0 -1rem 0 0"
                                colorToken="white">
                                Read Documentation ↗
                            </Link>
                        </View>

                        <Text
                            size="sm"
                            colorToken="accent-200">
                            <Link
                                style={{ '--f-underline-size': '1px' }}
                                size="sm"
                                textDecoration="none"
                                className="f-underline"
                                color={Token.ColorAccent100}
                                href="https://61fb81a2.sibforms.com/serve/MUIFAIdcVTZB8JLOGmoTu48YYshDwC7Uinyzu3h4sQKqJioZOki2cl7S5BCY9S_sw31Joe2i5fz6RGJfuKXy641YsGYsxkJLqlrTpZXa7H5tzVKRVbkDZvBCKpluQAp4hLkdoWVl7WsceXoIa6GPGRfxYe4tOM8IGmYO-1GfJ-DqScQ1p65akSfLMCl-fGu0sgUUYYnMUlZPn-CW">
                                Subscribe to our newsletter
                            </Link> 
                            &nbsp; to get notified of any updates!
                        </Text> 
                       
                        <GraphicLeft
                            style={{ position: 'absolute', top: 400, left: -200, opacity: 0.2 }}
                            width={1107 / 2}
                            height={559 / 2}
                        />
                    </View>
                </View>
            </View>

            <View
                row
                height="fit-content"
                zIndex={10}
                position="relative"
                m="-500px 0 0 0">
                <View
                    bgToken="surface"
                    width="95%"
                    p="1rem"
                    radius="var(--f-radius)"
                    justifyContent="flex-start"
                    alignContent="flex-start"
                    alignItems="flex-start"
                    position="relative">
                    <Options
                        m="0 auto 1rem auto"
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
                        </Option>
                        <Option>
                            Date Picker
                        </Option>
                    </Options>
                    
                    <View
                        width="100%"
                        height="fit-content"
                        position="relative"
                        zIndex={0}>
                        <Borderless />
                    </View>
                </View>
            </View>

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
                        Leverage Fold Core's 85+ components to power your next project. Fold Core is completely Open Source (MIT), and will always remain that way.
                    </Heading>
                    <Code 
                        snippet="npm i --save @fold-dev/core @fold-dev/design"
                    />
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
                            What's Included
                        </Text>
                        <Heading
                            colorToken="accent-50"
                            fontWeight={400}>
                            Made for product builders. Whether it's a SaaS product or enterprise app, we got you covered.
                        </Heading>
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
                            ].map(({ title, text }, index) => (
                                <GridItem key={index}>
                                    <Heading
                                        as="h2"
                                        colorToken="accent-50"
                                        m="0 0 0.25rem 0">
                                        {title}
                                    </Heading>
                                    <Text colorToken="accent-100">{text}</Text>
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
                            Product Driven
                        </Text>
                        <Heading
                            colorToken="text"
                            fontWeight={400}>
                            Fold has been built through many years building real world products
                        </Heading>
                        <Link
                            href="#"
                            color="var(--f-color-text)"
                            className="f-underline"
                            textDecoration="none">
                            Get Started ↗
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
                            Used in Production
                        </Text>
                        <Heading
                            colorToken="text"
                            fontWeight={400}>
                            Fold has been built through many years building real world products
                        </Heading>
                        <Text
                            size="lg"
                            colorToken="text-weak"
                            fontWeight={400}>
                            Get access to our Pro components to supercharge your product. Whether you're building a SaaS or internal dashboard, we have flexible licensing options.
                        </Text>
                        <Link
                            href="#"
                            color="var(--f-color-text)"
                            className="f-underline"
                            textDecoration="none">
                            Get Started ↗
                        </Link>
                    </View>
                </View>
            </View>


            <Divider />

            {/* pro */}

            <View
                id="pro"
                column
                gap="2rem"
                flex={1}
                bgToken="base-800"
                width="100%"
                position="relative"
                style={{ overflow: 'hidden' }}
                p="10rem 0">
                <GraphicRight
                    color={Token.ColorAccent200}
                    style={{ position: 'absolute', top: -100, right: -100, opacity: 0.1 }}
                    height={882 / 2}
                    width={1456 / 2}
                />

                <Text
                    textAlign="center"
                    style={{ textTransform: 'uppercase' }}
                    letterSpacing={5}
                    colorToken="base-500">
                    Fold Pro 
                </Text>

                <Heading
                    textAlign="center"
                    colorToken="base-200"
                    fontWeight={400}
                    width="80%">
                    Get access to our Pro components to supercharge your product. Whether you're building a SaaS or internal dashboard, we have flexible licensing options.
                </Heading>

                <Pill
                    subtle
                    color={Token.ColorPurple500}
                    m="2rem 0">
                    We are currently in Early Access. 🚀 &nbsp; <Link color={Token.ColorPurple400} href="">Read more here</Link> &nbsp; about how that affects licensing & pricing.
                </Pill>

                <View 
                    row
                    gap="1rem"
                    width={500}>
                    <Range
                        style={{ '--f-range-background': 'var(--f-color-base-700)' }}
                        min={1}
                        max={10}
                        step={1}
                        value={seats}
                        onChange={(e) => setSeats(+e.target.value)}
                    />
                    <Text colorToken="base-400" display="inline-block" width={130}>
                        {seats} {seats == 1 ? 'Developer' : 'Developers'}
                    </Text>
                </View>

                <View
                    row
                    justifyContent="space-between"
                    width="fit-content"
                    flex={1}
                    gap={20}
                    position="relative">
                    <Card
                        column
                        width={325}
                        height={650}
                        p="2rem"
                        gap="1rem"
                        border="none"
                        alignItems="flex-start"
                        alignContent="flex-start"
                        justifyContent="flex-start">
                        <Heading as="h2">Indie</Heading>
                        <Text colorToken="base-300">
                            For teams building products that haven't launched to market yet.
                        </Text>
                        <View
                            row
                            m="1rem 0 0 0"
                            gap={5}
                            alignItems="flex-start">
                            <Heading huge>{pricingIndie()}</Heading>
                            <Heading as="h5" fontWeight={600}>USD</Heading>
                        </View>
                        <Heading
                            as="h4"
                            colorToken="text-weakest"
                            textDecoration="line-through">
                            {pricingIndie(499)} USD
                        </Heading>
                        <List>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Kanban Board
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Todo List
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Calendar
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Data Grid
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> CSV Importer
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Date Picker
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Limited to prototyping
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Access to private support group
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> 1 year of updates
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> 
                                NPM access
                                <Pill
                                    subtle
                                    size="xs"
                                    m="0 0 0 0.5rem"
                                    color={Token.ColorAccent400}>
                                    Coming Soon
                                </Pill>
                            </Li>
                            <Li row colorToken="purrple-400" width="fit-content">
                                <IconLib icon="check" />
                                Unreleased roadmap components
                            </Li>
                        </List>
                        <Flexer />
                        <Button
                            as="a"
                            href="https://fold.lemonsqueezy.com/buy/5c98013d-1db7-4377-8980-39fcc04ab206?quantity=2" 
                            className="lemonsqueezy-button"
                            m="1rem 0 0 0"
                            size="xl"
                            width="100%"
                            variant="accent">
                            Buy
                        </Button>
                    </Card>

                    <Card
                        column
                        width={325}
                        height={650}
                        p="2rem"
                        gap="1rem"
                        border="none"
                        alignItems="flex-start"
                        alignContent="flex-start"
                        justifyContent="flex-start">
                        <Heading as="h2">Enterprise</Heading>
                        <Text colorToken="base-300">
                            For teams building internal-use products that generate no revenue.
                        </Text>
                        <View
                            row
                            m="1rem 0 0 0"
                            gap={5}
                            alignItems="flex-start">
                            <Heading huge>{pricingEnterprise()}</Heading>
                            <Heading as="h5" fontWeight={600}>USD</Heading>
                        </View>
                        <Heading
                            as="h4"
                            colorToken="text-weakest"
                            textDecoration="line-through">
                            {pricingEnterprise(999)} USD
                        </Heading>
                        <List>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Everything in Indie
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Unlimited internal use
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Prioritized support
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Prioritized feature requests
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Source code
                            </Li>
                        </List>
                        <Flexer />
                        <Button
                            as="a"
                            href="https://fold.lemonsqueezy.com/buy/5c98013d-1db7-4377-8980-39fcc04ab206?embed=1&discount=0" 
                            className="lemonsqueezy-button"
                            m="1rem 0 0 0"
                            size="xl"
                            width="100%"
                            variant="accent">
                            Buy
                        </Button>
                    </Card>

                    <Card
                        column
                        width={325}
                        height={650}
                        p="2rem"
                        gap="1rem"
                        border="none"
                        alignItems="flex-start"
                        alignContent="flex-start"
                        justifyContent="flex-start">
                        <Heading as="h2">SaaS</Heading>
                        <Text colorToken="base-300">
                            For teams that have launched to market or acquired external funding.
                        </Text>
                        <View
                            row
                            m="1rem 0 0 0"
                            gap={5}
                            alignItems="flex-start">
                            <Heading huge>{pricingSaas()}</Heading>
                            <Heading as="h5" fontWeight={600}>USD</Heading>
                        </View>
                        <Heading
                            as="h4"
                            colorToken="text-weakest"
                            textDecoration="line-through">
                            {pricingSaas(3399)} USD
                        </Heading>
                        <List>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Everything in Indie
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Dedicated support email
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Onboarding call
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Unlimited internal & external use
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Prioritized support
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Prioritized feature requests
                            </Li>
                            <Li row width="fit-content">
                                <IconLib icon="check" /> Source code
                            </Li>
                        </List>
                        <Flexer />
                        <Button
                            as="a"
                            href="https://fold.lemonsqueezy.com/buy/5c98013d-1db7-4377-8980-39fcc04ab206?embed=1&discount=0" 
                            className="lemonsqueezy-button"
                            m="1rem 0 0 0"
                            size="xl"
                            width="100%"
                            variant="accent">
                            Buy
                        </Button>
                    </Card>
                </View>

                <View row>
                    <Text colorToken="base-600">
                        More than 10 developers? <Link href="#">Contact us.</Link> Pro licensing are subject to our <Link href="#">terms & conditions</Link>.
                    </Text>
                </View>
            </View>

            <View 
                row 
                bgToken="base-800"
                position="relative"
                p="0 0rem 11rem 0rem"
                width="100%"
                style={{ overflow: 'hidden' }}>
                <GraphicLeft
                    color={Token.ColorAccent200}
                    style={{ position: 'absolute', bottom: -100, left: -200, opacity: 0.1 }}
                    width={1107 / 2}
                    height={559 / 2}
                />
                <View
                    row
                    gap={50}
                    width="85%"
                    radius="var(--f-radius)"
                    bgToken="base-700"
                    position="relative"
                    style={{ overflow: 'hidden' }}
                    alignItems="flex-start">
                    <View
                        column
                        flex={1}
                        gap={30}
                        alignItems="flex-start"
                        p="5rem 0rem 5rem 5rem">
                        <Pill
                            subtle
                            style={{ textTransform: 'uppercase' }}
                            color={Token.ColorAccent400}>
                            Fold Pro Early Access
                        </Pill>
                        <Text
                            style={{ textTransform: 'uppercase' }}
                            letterSpacing={5}
                            colorToken="base-500"
                            id="features">
                            Fineprint
                        </Text>
                        <Heading
                            colorToken="base-100"
                            fontWeight={400}>
                            We've just released Early Access, but what does that mean?
                        </Heading>
                    </View>

                    <View
                        column
                        flex={2}
                        gap={30}
                        alignItems="flex-start"
                        p="5rem">
                        <Grid
                            columns={2}
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
                            ].map(({ title, text }, index) => (
                                <GridItem key={index}>
                                    <Heading
                                        as="h2"
                                        colorToken="base-100"
                                        m="0 0 0.25rem 0">
                                        {title}
                                    </Heading>
                                    <Text colorToken="base-400">{text}</Text>
                                </GridItem>
                            ))}
                        </Grid>
                    </View>
                </View>
            </View>

            <Divider />

            {/*faq */}                       

            <View 
                row 
                id="faq"
                position="relative"
                p="5rem 0rem"
                width="100%"
                style={{ overflow: 'hidden' }}>
                <View
                    column
                    gap="2rem"
                    position="relative">
                    <Text
                        textAlign="center"
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="text-weakest">
                        FAQ
                    </Text>
                    <Heading
                        textAlign="center"
                        fontWeight={400}
                        width="80%">
                        Frequently Asked Questions
                    </Heading>
                    <Accordion 
                        m="1rem 0 0 0"
                        width="85%"
                        style={{ '--f-accordion-background': 'transparent' }}>
                        <AccordionItem>
                            <AccordionHeading>Are there really no dependencies?</AccordionHeading>
                            <AccordionPanel>
                                None. The sole dependencies are React and ReactDOM, and of course any additional libraries you
                                integrate into your project.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Does Fold use CSS-in-JS?</AccordionHeading>
                            <AccordionPanel>
                                No. Fold utilizes pure CSS, compiled at build time, to tailor the appearance of components and
                                provides helper classes for added customization.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Are there other runtime targets available?</AccordionHeading>
                            <AccordionPanel>
                                Currently, only ES6 Modules are supported. However, we are actively seeking feedback on how we
                                can accommodate a broader range of users. Please let us on know at our{' '}
                                <Link
                                    href="https://github.com/fold-dev/fold/discussions"
                                    target="_blank"
                                    fontSize="inherit">
                                    repository
                                </Link>{' '}
                                on GitHub.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Where can I file bugs or feature requests?</AccordionHeading>
                            <AccordionPanel>
                                Please visit at our{' '}
                                <Link
                                    href="https://github.com/fold-dev/fold"
                                    target="_blank"
                                    fontSize="inherit">
                                    repository
                                </Link>{' '}
                                on GitHub.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Are there plans to support other frameworks like Svelte or Vue?</AccordionHeading>
                            <AccordionPanel>Not yet.</AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Can I use this for production?</AccordionHeading>
                            <AccordionPanel>
                                Certainly, however Fold is currently in its alpha stage. Nevertheless, you have the option to
                                use it in a production environment if you wish.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Can I contribute?</AccordionHeading>
                            <AccordionPanel>
                                Absolutely! Please visit at our{' '}
                                <Link
                                    href="https://github.com/fold-dev/fold"
                                    target="_blank"
                                    fontSize="inherit">
                                    repository
                                </Link>{' '}
                                on GitHub to find out how.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Is there a premium support package available?</AccordionHeading>
                            <AccordionPanel>Not yet.</AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>What are the future plans for Fold?</AccordionHeading>
                            <AccordionPanel>
                                Please see our{' '}
                                <Link
                                    href="https://github.com/orgs/fold-dev/projects/8"
                                    target="_blank"
                                    fontSize="inherit">
                                    Roadmap
                                </Link>{' '}
                                for upcoming development.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>


                </View>
            </View>

            <Divider />      

            {/* features */}

            <View 
                row 
                m="5rem 0"
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
                            Ready. Set. Go.
                        </Text>
                        <Heading
                            colorToken="accent-50"
                            fontWeight={400}>
                            Need help scaling your next big idea? Let Fold do the heavy lifting.
                        </Heading>
                    </View>
                    <View
                        flex={2}
                        p="5rem"
                        position="relative">
                        <View
                            column
                            gap={30}
                            position="relative">
                            {[
                                {
                                    url: 'https://github.com/fold-dev/fold/discussions',
                                    title: 'SaaS Licensing',
                                    text: 'Fold offers a SaaS license option that enables you to leverage all Pro components for your next project.',
                                },
                                {
                                    url: 'https://github.com/fold-dev/fold/issues',
                                    title: 'Custom Development',
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
                                            as="h2"
                                            m="0 0 0.25rem 0"
                                            colorToken="base-100">
                                            {title} ↗
                                        </Heading>
                                    </Link>
                                    <Text colorToken="base-300">{text}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </View> 
        </>

    )
}

Home.noLayout = true

export default Home
