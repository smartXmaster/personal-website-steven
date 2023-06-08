import { IconType } from 'react-icons'
import {
  FaTelegram,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/@graham_steven',
    icon: FaTwitter,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/smartXmaster',
    icon: FaTelegram,
  },
  // {
  //   label: 'Instagram',
  //   href: 'https://www.instagram.com/@steven',
  //   icon: FaInstagram,
  // },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/stevengraham0214',
    icon: FaLinkedin,
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/users/21950574/smartxmaster',
    icon: FaStackOverflow,
  },
  // {
  //   label: 'Youtube',
  //   href: 'https://www.youtube.com/@steven',
  //   icon: FaYoutube,
  // },
  {
    label: 'Github',
    href: 'https://github.com/ienjoyjs',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/smartxmaster',
    icon: FaDev,
  },
]
