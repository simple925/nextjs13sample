"use client"

import { useRouter } from "next/navigation"

export default function Create() {
    const router = useRouter()
    return (
        <form onSubmit={e=>{
            e.preventDefault()
            const title = e.target.title.value
            const body = e.target.body.value
            console.log(title)
            console.log(body)
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, body})
            }
            // 보안때문에 클라이언트에서 사용시 반드시 접두어로 NEXT_PUBLIC_ 을 붙혀야됨
            fetch(process.env.NEXT_PUBLIC_API_URL+`topics`, options)
            .then(res=>res.json())
            .then(result=>{
                console.log(result)
                const lastid = result.id
                router.refresh()
                router.push(`/read/${lastid}`)
            })
        }}>
            <p>
                <input type="text" name="title" placeholder="title"></input>
            </p>
            <p>
                <textarea name="body" placeholder="body"></textarea>
            </p>
            <p>
                <input type="submit" value="create"/>
            </p>
        </form>
    )
}