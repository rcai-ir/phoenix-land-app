import React from 'react';
import HomePage from '@/screens/home-page';
import LoginScreen, { loginScreenProps } from '@/screens/login-screen';
import ProfileScreen from '@/screens/profile-screen';
import Page1 from '@/screens/page1';
import Page2 from '@/screens/page2';
import Page3 from '@/screens/page3';

export interface Page<loginScreenProps> {
    name:string;
    persianName: string;
    component: React.ComponentType<loginScreenProps>;
    rule?: string
}
type PageComponentProps = loginScreenProps ;


export const Pages: Page<PageComponentProps>[] = [
    {
        name: 'LoginScreen',
        persianName: 'صفحه ورود',
        component: LoginScreen ,
        rule: 'restricted',
    },
    {
        name: 'HomeScreen',
        persianName: 'صفحه نخست',
        component: HomePage,
        rule: 'private',
    },
    {
        name: 'ProfileScreen',
        persianName: 'پروفایل شخصی',
        component: ProfileScreen,
        rule: 'private',
    },
    {
        name: 'Page1',
        persianName: 'صفحه اول',
        component: Page1,
        rule: 'private',
    },
    {
        name: 'Page2',
        persianName: 'صحفه دوم',
        component: Page2,
        rule: 'private',
    },
    {
        name: 'Page3',
        persianName: 'صفحه سوم',
        component: Page3,
        rule: 'private',
    },
];
