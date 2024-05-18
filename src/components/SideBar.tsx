import ChatTitle from "./ChatTitle";
import SideBarFooter from "./SideBarFooter";
import SideBarHead from "./SideBarHead";
import SideBarLabel from "./SideBarLabel";

export default function SideBar() {
    return (
        <div className=" flex flex-col">
            <div className="hidden p-3 md:block 
        md:w-64
        bg-neutral-900
        overflow-auto
        scroll-smooth
        relative
        ">
                <div className=" sticky top-0 z-10">
                    <SideBarHead />
                </div>

                <div>
                    <SideBarLabel description="Today"/>
                    {/* These are dummy titles */}
                    <ChatTitle title='what is ChatGPT?' />
                    <ChatTitle title='React Interview Questions' />
                    <ChatTitle title='Error: Resolving' />
                </div>
                <div>
                    <SideBarLabel description="Previous 7 Days"/>
                    {/* These are dummy titles */}
                    <ChatTitle title='Web Dev roadmap' />
                    <ChatTitle title='AI Roadmap' />
                    <ChatTitle title='New chat' />
                    <ChatTitle title='Machine Learning' />
                    <ChatTitle title='Debugging Procedure' />
                </div>
                <div>
                    <SideBarLabel description="Previous 30 Days"/>
                    {/* These are dummy titles */}
                    <ChatTitle title='App Developer' />
                    <ChatTitle title='Resume Format' />
                    <ChatTitle title='Welcome: GeminiGPT' />

                </div>
            </div>
            <div className="hidden md:block">
                <SideBarFooter />
            </div>
        </div>

    )
}