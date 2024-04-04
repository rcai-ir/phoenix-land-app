import {SvgProps} from "react-native-svg";
import ArrowLeft from '../../../assets/SVGs/ArrowLeftSmall.svg';

export interface Pages {
  name:string;
  persianName: string;
  rule?: string,
  icon?: React.ComponentType<SvgProps>,
  navigationLink?: string,
  action?: ()=> void
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
];
