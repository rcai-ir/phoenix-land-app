import HomePage from "@/screens/home-page";
import LoginScreen from "@/screens/login-screen";

export interface Page {
    name:string;
    persianName: string;
    component: React.ComponentType<any>;
    rule?: string 
}

export const Pages: Page[] = [
    {
        name: 'LoginScreen',
        persianName: 'صفحه ورود',
        component: LoginScreen,
        rule: "restricted"
    },
    {
        name: 'HomeScreen',
        persianName: 'صفحه نخست',
        component: HomePage,
        rule: "private"
    },
]