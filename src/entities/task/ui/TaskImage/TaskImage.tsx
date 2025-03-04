import { TaskImageProps } from '@/entities/task'
import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Icon } from '@/shared/ui'

import s from './TaskImage.module.scss'

export const TaskImage = ({
  image,
  type,
}: TaskImageProps) => {
  return (
    <div
      className={
        type === 'base'
          ? s.imageBasePlaceholder
          : s.imageEditPlaceholder
      }
    >
      <Icon
        src={
          image
            ? `${ASSETS_ICON_PATH}/${image}`
            : `${ASSETS_ICON_PATH}/placeholder_image`
        }
        size={45}
      />
    </div>
  )
}
