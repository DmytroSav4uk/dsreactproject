// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів

interface RocketLaunch {
    mission_name: string
    launch_date_local: string
    launch_site: {
        site_name_long: string
    },
    links: {
        article_link: string
        video_link: string
    },
    rocket: {
        rocket_name: string
        first_stage: {
            cores: [
                {
                    flight: number
                    core: {
                        reuse_count: number
                        status: string
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: string
                    payload_mass_kg: number
                    payload_mass_lbs: number
                }
            ]
        }
    }
}


const rocketLaunch : RocketLaunch = {
    mission_name: "Polit",
    launch_date_local: "qweq",
    launch_site: {
        site_name_long: "fdsfsd"
    },
    links: {
        article_link: "string",
        video_link: "string"
    },
    rocket: {
        rocket_name: "string",
        first_stage: {
            cores: [
                {
                    flight: 35,
                    core: {
                        reuse_count: 54,
                        status: "string"
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: "string",
                    payload_mass_kg: 12,
                    payload_mass_lbs: 13
                }
            ]
        }
    }
}
const rocketLaunch2 : RocketLaunch = {
    mission_name: "Polit",
    launch_date_local: "qweq",
    launch_site: {
        site_name_long: "fdsfsd"
    },
    links: {
        article_link: "string",
        video_link: "string"
    },
    rocket: {
        rocket_name: "string",
        first_stage: {
            cores: [
                {
                    flight: 35,
                    core: {
                        reuse_count: 54,
                        status: "string"
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: "string",
                    payload_mass_kg: 12,
                    payload_mass_lbs: 13
                }
            ]
        }
    }
}




// export {
//     RocketLaunch
// }