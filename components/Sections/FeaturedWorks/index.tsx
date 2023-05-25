import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my projects.
      </Heading>
      <Text variant="description">Check out some of the sites</Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="shmacked"
            src="/works/shmacked.png"
            description="
              Fast Delivery. Shmacked offers unmatched convenience by delivering everything from snacks,
              drinks, nicotine, and alcohol in less than 15 minutes!"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://shmacked.com/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="fazwaz"
            description="
              Find your dream home on Thailand's most popular property portal.
              Compare 41127 condos & houses for sale using the latest real estate market data."
            src="/works/fazwaz.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.fazwaz.com/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="nftcars"
            description="
              NFTCARS is an NFT project based on BNB Chain.
              We have created 5000 NFT images with well-known car brands
              with a different set of characteristics and rarity."
            src="/works/nftcars.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://nftcars.me/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="cropper"
            description="
              Decentralized Ecosystem that Empowers Projects & Maximizes Yield to
              move Defi forward on Solana. Swap, Yield Farming, Staking, IDO Launchpad & more."
            src="/works/cropperfinance.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://cropper.finance/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={5}
            title="trading"
            description="
              Perfect Your Trading is an educational platform built to
              make you an excellent trader in the shortest possible time."
            src="/works/perfectyourtrading.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://perfectyourtrading.com/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
