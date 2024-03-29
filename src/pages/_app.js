import DefaultLayout from "@/components/layouts/DefaultLayout";
import "../styles/tailwind.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
    );
}
