import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
      <section>
          <div className="flex items-center gap-8 mb-8">
              <h1 className="text-3xl font-bold">About Me</h1>
              <div className="profile-image-container">
                  <Image
                      src="/images/pfp.png"
                      alt="Tyler Prestridge"
                      width={200}
                      height={200}
                      className="profile-image"
                      priority
                  />
              </div>
          </div>
          <p className="mb-4">
              {`I'm a seasoned web developer with 8 years of professional experience specializing in Magento 2/Adobe Commerce
          and specialized business systems. I'm passionate about helping small businesses build their online presence through effective
          web solutions. My extensive background in e-commerce platforms and custom development allows me to create
          tailored solutions that drive business growth.`}
          </p>
          <br/>
          <p className="mb-4">
              {`You can reach out to me at `}
              <a href="mailto:tylereprestridge@gmail.com">tylereprestridge@gmail.com</a>
              {` for a free consultation.`}
          </p>
      </section>  )
}
