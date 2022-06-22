import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function Event() {
    return (
        <div className="flex flex-col">
            <Header />

            <main className="flex flex-1 min-h-screen">
                <div className="flex-1">
                    <h1>Hello Word</h1>
                </div>

                <Sidebar />
            </main>
        </div>
    )
}