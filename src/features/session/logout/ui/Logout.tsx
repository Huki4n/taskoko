import { useRouter } from 'next/router'

import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { removeAccessToken } from '@/shared/lib/token-utils/tokenStorage'
import { Icon } from '@/shared/ui'

export const Logout = () => {
  const router = useRouter()

  const logout = () => {
    removeAccessToken()
    router.push('/login')
  }

  return (
    <Icon
      src={`${ASSETS_ICON_PATH}/logout`}
      size={16}
      onClick={logout}
      opacity={70}
    />
  )
}
