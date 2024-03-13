import ArrowLeft from "../../../assets/SVGs/ArrowLeftSmall.svg";


export interface Pages {
    name:string;
    persianName: string;
    rule?: string,
    icon?: any,
    navigationLink?:any,
    action?: any
}

export const ListOfBottomSheet: Pages[] = [
    {
        name: 'ContactUs',
        persianName: 'صفحه نخست',
        icon: ArrowLeft,
        navigationLink: 'HomeScreen',

    },
    {
        name: 'SettingScreen',
        persianName: 'تنظیمات',
        icon: ArrowLeft,
        navigationLink: 'SettingScreen',
    },
]