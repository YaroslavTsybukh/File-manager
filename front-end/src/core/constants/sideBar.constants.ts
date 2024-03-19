import { Home, Share2, Trash2, Settings } from 'lucide-react';
import { paths } from 'core/config';

export const SIDEBARITEMS = [
    {
        id: 1,
        content: 'Home',
        path: paths.home,
        icon: Home,
    },
    {
        id: 2,
        content: 'Shared with me',
        path: paths.sharedWithMe,
        icon: Share2,
    },
    {
        id: 3,
        content: 'Trash',
        path: paths.trash,
        icon: Trash2,
    },
    {
        id: 4,
        content: 'Settings',
        path: paths.settings,
        icon: Settings,
    },
];
