import { StaticImageData } from "next/image";

export interface IProject {
    screenshot: string | StaticImageData,
    name: string,
    description: string,
    stack: string,
    demo: string,
    code: string,
}