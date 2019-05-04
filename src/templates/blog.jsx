import React from "react"

import { Page } from "../components/common"
import Navbar from "../components/navbar"
import Meta from "../components/meta"

const BlogPage = () => (
    <Page>
        <Meta
            title="Blog"
            author="Me"
            description="desc"
        />

        <Navbar active="blog" />
    </Page>
)

export default BlogPage
