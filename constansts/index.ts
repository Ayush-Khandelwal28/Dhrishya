export const SidebarLinks = [
    {
        label: 'Home',
        route: '/',
        imageUrl: '/icons/home.svg',
    },
    {
        label: 'Upcoming Meetings',
        route: '/upcoming',
        imageUrl: '/icons/upcoming.svg',
    },
    {
        label: 'Previous Meetings',
        route: '/previous',
        imageUrl: '/icons/previous.svg',
    },
    {
        label: 'Recordings',
        route: '/recordings',
        imageUrl: '/icons/recordings.svg',
    },
    {
        label: 'Personal Room',
        route: '/personalRoom',
        imageUrl: '/icons/personal.svg',
    },
]

export const HomeCardDetails = [
    {
        imgSrc: '/icons/add-meeting.svg',
        imgAlt:'Add Meetings',
        title: 'New Meeting',
        description: 'Start an Instant Meeting',
        color: 'orange-1',
        onclick: 'upcoming'
    },
    {
        imgSrc: '/icons/join-meeting.svg',
        imgAlt:'Join-Meeting',
        title: 'Join Meeting',
        description: 'Join an existing Meeting through a link',
        color: 'purple-1',
        onclick: 'upcoming'
    },
    {
        imgSrc: '/icons/schedule.svg',
        imgAlt:'schedule-meeting',
        title: 'Schedule a Meeting',
        description: 'Schedule a Meeting for later',
        color: 'sky-1',
        onclick: 'upcoming'
    },
    {
        imgSrc: '/icons/recordings.svg',
        imgAlt:'view-recordings',
        title: 'View Recordings',
        description: 'View the recordings of your meetings',
        color: 'yellow-1',
        onclick: 'recordings'
    }
]