export type CSSTemplate = {
    [key: string]: {
        [key: string]: string;
    };
};

export type profile = {
    name: string,
    title: string,
    bio: string,
    headshotUrl: string,
    skills: string[],
    experience: {
            company: string,
            position: string,
            duration: string,
            description: string
        }[],
    education: {
            degree: string,
            institution: string,
            duration: string,
            description: string
        }[],
}