import Layout from "@/components/layout/Layout";
import React from "react";
import {request} from "../../lib/datocms"
import Image from 'next/image';

const ABOUT_QUERY ="query article {article {title backgroundImage {responsiveImage {src width height}}}}"

export async function getStaticProps() {
    const data = await request({
        query: ABOUT_QUERY,
        variables: {limit: 10},
    })
    return {
        props: {data},
    }
}

const about = ({data}: any) => {

    return (

        <Layout>
            About
            <h3>{data.article.title}</h3>
            <Image
  src={data.article.backgroundImage.responsiveImage.src}
  width={data.article.backgroundImage.responsiveImage.width}
  height={data.article.backgroundImage.responsiveImage.height}
  alt={"data.article.backgroundImage.responsiveImage.alt"}
/>
        </Layout>

    )

}

export default about;