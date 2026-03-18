import { CONTACT } from '@/config/site'
import {
  Call02Icon,
  Location01Icon,
  MailIcon,
} from '@hugeicons/core-free-icons'

export const contact = [
  { icon: Call02Icon, href: CONTACT.phoneTel, label: CONTACT.phone },
  { icon: MailIcon, href: CONTACT.emailMailto, label: CONTACT.email },
  { icon: Location01Icon, label: CONTACT.addressFull },
]
