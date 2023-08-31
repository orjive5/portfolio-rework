import { StaticImageData } from "next/image";

export interface IProject {
    screenshot: string | StaticImageData,
    name: string,
    description: string,
    demo: string,
    code: string,
}