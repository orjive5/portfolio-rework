import { GithubIcon } from "../svgs/GithubIcon";
import { InstagramGoldIcon } from "../svgs/InstagramGoldIcon";
import { InstagramGradientIcon } from "../svgs/InstagramGradientIcon";
import { LinkedinIcon } from "../svgs/LinkedinIcon";

const SocialIcons = () => {
  return (
    <div className="flex gap-2 relative">
        <LinkedinIcon />
        <GithubIcon />
        <InstagramGoldIcon />
        <InstagramGradientIcon />
    </div>
  )
}

export default SocialIcons;