'use client'
import * as motion from "motion/react-client"

export default function SlideView({children, type, up=true, delay=0.2, ...props}) {
    const Tag = motion[type];
    return (
        <Tag {...props}
            initial={{ opacity:0,transform:`translateY(${up? 80 : -80}%)`, scale:0 }}
            whileInView={{ opacity:1,transform:"translateY(0)", scale:1 }}
            transition={{ duration:0.8, ease:"easeIn", delay:delay }}
            viewport={{ once:true }}
        >
            {children}
        </Tag>
    )
}