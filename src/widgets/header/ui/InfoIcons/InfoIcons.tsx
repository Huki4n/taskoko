import s from './InfoIcons.module.scss'
import {Icon} from "@/shared/ui";

export const InfoIcons = () => {
  return (
      <div className={s.icons}>
        <Icon
            src={'/assets/comment.svg'}
            alt={'comments'}
            size={[26, 30]}
        />
        <Icon
            src={'/assets/notification.svg'}
            alt={'Bell'}
            size={26}
        />
      </div>
  );
};