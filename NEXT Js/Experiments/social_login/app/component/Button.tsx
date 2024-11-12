
import { signIn } from "@/auth"

// export default function Button({ label }: { label: string }) {
//     return (
//         <button onClick={() => { signIn("github") }}>{label}</button>
//     )
// }




export default function Button({ label }: { label: string }) {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("github")
            }}
        >
            <button type="submit">{label}</button>
        </form>
    )
} 