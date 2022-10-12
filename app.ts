import {IRocket} from "./Task1/rocket.interface";

const rocket1: IRocket = {
    mission_name: "Falcon",
    launch_date_local: "string",
    launch_site: {
        site_name_long: "string"
    },
    links: {
        article_link: null ,
        video_link: "string"
    },
    rocket: {
        rocket_name: "string",
        first_stage: {
            cores: [
                {
                    flight: 12,
                    core: {
                        reuse_count: 501,
                        status: true
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: "string",
                    payload_mass_kg: 13,
                    payload_mass_lbs: 12
                }
            ]
        }
    }}
const rocket2: IRocket = {
    mission_name: "Tempest",
    launch_date_local: "string",
    launch_site: {
        site_name_long: "string"
    },
    links: {
        article_link: null ,
        video_link: "string"
    },
    rocket: {
        rocket_name: "string",
        first_stage: {
            cores: [
                {
                    flight: 12,
                    core: {
                        reuse_count: 501,
                        status: true
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: "string",
                    payload_mass_kg: 13,
                    payload_mass_lbs: 12
                }
            ]
        }
    }}

console.log(rocket1)
console.log(rocket2)