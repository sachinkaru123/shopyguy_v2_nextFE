"use client";

import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import CarouselCard1 from 'components/carousel-cards/carousel-card-1';

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section className="embla">
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div key={index} className="embla__slide">
            {/* <img src={slide.src} alt={`Slide ${index + 1}`} /> */}
            <CarouselCard1
            key={index}
            buttonColor="dark"
            title={slide.title}
            imgUrl={slide.imgUrl}
            buttonLik={slide.buttonLik}
            buttonText={slide.buttonText}
            description={slide.description}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default EmblaCarousel
