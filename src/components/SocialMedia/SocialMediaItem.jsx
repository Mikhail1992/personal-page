import cn from "classnames";
import "./SocialMediaItem.css";

const SocialMediaItem = ({ children, text, href, type }) => {
  return (
    <a
      className={cn("social-media-item", {
        [`social-media-item_${type}`]: !!type,
      })}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span
        className={cn("social-media-item__icon", {
          [`social-media-item__icon_${type}`]: !!type,
        })}
      >
        {children}
      </span>
      {text}
    </a>
  );
};

export default SocialMediaItem;
