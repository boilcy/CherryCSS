"use client"

import { Theme } from "@/lib/types"
import { useState } from "react"
import { CircleUser, FileText, Image, MessageSquare, Moon, PanelLeft, Paperclip, Search, Send, Settings, Sun, User } from "lucide-react"

interface ThemeRendererProps {
    theme: Theme
}

export default function ThemeRenderer({ theme }: ThemeRendererProps) {
    const uniqueWrapperClass = 'theme-wrapper'
    const [themeMode, setThemeMode] = useState<"light" | "dark">("light")
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)


    return (<div
        className={`${uniqueWrapperClass} flex flex-row rounded-lg overflow-hidden border shadow-md w-full h-full`}
        theme-mode={themeMode}
    >
        <style jsx global>{`
            .${uniqueWrapperClass} {
                ${theme.css}
            }
        `}</style>
        {/* App sidebar */}
        <div
            className="w-12 min-w-12 flex flex-col items-center py-2 pb-3 mt-[40px]"
        >
            {/* Avatar */}
            <div
                className="w-[35px] h-[35px] rounded-full flex items-center justify-center mb-3"
            >
                <MessageSquare size={16} />
            </div>

            { /* MainMenusContainer */}
            <div className="flex flex-1 flex-col overflow-hidden">
                { /* Menus */}
                { /* for each */}
                <div className="flex flex-col items-center gap-1">
                    <div
                        className="w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer border border-transparent hover:opacity-80 active:border-[var(--color-border)]"
                    >
                        <MessageSquare size={16} />
                    </div>

                    <div
                        className="w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer border border-transparent hover:opacity-80 active:border-[var(--color-border)]"
                    >
                        <FileText size={16} />
                    </div>

                    <div
                        className="w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer border border-transparent hover:opacity-80 active:border-[var(--color-border)]"
                    >
                        <Search size={16} />
                    </div>
                </div>
            </div>

            <div className="mt-auto flex flex-col gap-4">
                <div
                    className="w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer border border-transparent hover:opacity-80 active:border-[var(--color-border)]"
                    onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")}
                >
                    {themeMode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </div>

                <div
                    className="w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer border border-transparent hover:opacity-80 active:border-[var(--color-border)]"
                >
                    <CircleUser size={16} />
                </div>
            </div>
        </div>

        {/* Main container */}
        <div className="flex flex-1 flex-col">
            {/* App Navbar */}
            <div
                className="flex items-center justify-between px-4 py-3 border-b h-[40px]"
            >
                <div className="flex items-center gap-3">
                    <div
                        className="p-1.5 rounded-full"
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    >
                        <PanelLeft size={16} />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">CherryCSS Chat</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-opacity-80">{theme.name}</span>
                    <button
                        type="button"
                        className="p-1.5 rounded-full hover:bg-opacity-20"
                    >
                        <Settings size={16} />
                    </button>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-1">
                {/* Home Tab */}
                {(!sidebarCollapsed && <div
                    className="w-[275px] border-r flex flex-col overflow-hidden"
                >
                    <div className="flex flex-row items-center justify-between p-3 border-b"
                    >
                        <div
                            className="flex-1 px-3 h-[34px] transition-none text-xs font-medium flex items-center justify-center rounded-2xl pt-[10px] mx-[10px] gap-2"
                        >
                            助手
                        </div>
                        <button
                            type="button"
                            className="flex-1 px-3 h-[34px] rounded transition-none text-xs font-medium flex items-center justify-center"
                        >
                            话题
                        </button>
                        <button
                            type="button"
                            className="flex-1 px-3 h-[34px] rounded transition-none text-xs font-medium flex items-center justify-center"
                            style={{
                                backgroundColor: "transparent",
                            }}
                        >
                            设置
                        </button>
                    </div>

                    <div className="overflow-auto pt-2 flex-1">
                        <div className="px-2 mb-1">
                            <div
                                className="flex items-center gap-2 p-2 rounded mb-1 hover:bg-opacity-90"
                            >
                                <span className="text-sm">📂 文件管理</span>
                            </div>

                            <div
                                className="flex items-center gap-2 p-2 rounded mb-1 hover:bg-opacity-90"
                            >
                                <span className="text-sm">🏠 虚拟导游 - Virtual Tour Guide</span>
                            </div>

                            <div
                                className="flex items-center gap-2 p-2 rounded mb-1 hover:bg-opacity-90"
                            >
                                <span className="text-sm">📕 英语单词背诵助手</span>
                            </div>

                            <div
                                className="flex items-center gap-2 p-2 rounded mb-1 hover:bg-opacity-90"
                            >
                                <span className="text-sm">🎨 数字艺术创作助手 - Digital Art...</span>
                            </div>

                            <div
                                className="flex items-center gap-2 p-2 rounded mb-1 hover:bg-opacity-90"
                            >
                                <span className="text-sm">🔒 网络安全专家 - Cyber Security...</span>
                            </div>

                            <div
                                className="flex items-center gap-2 p-2 rounded mb-1 hover:bg-opacity-90"
                            >
                                <span className="text-sm">🎭 角色扮演 - &apos;Character&apos; from...</span>
                            </div>

                            <div
                                className="flex items-center gap-2 p-2 rounded mb-1 hover:bg-opacity-90"
                            >
                                <span className="text-sm">🎤 脱口秀表演演员 - Stand-up...</span>
                            </div>

                            <div
                                className="flex items-center justify-between gap-2 p-2 rounded mb-1 hover:bg-opacity-90"
                            >
                                <div className="flex items-center gap-1">
                                    <span className="text-amber-400">★</span>
                                    <span className="text-sm">默认助手</span>
                                </div>
                                <span className="text-xs px-1 rounded bg-gray-700">26</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-3 border-t">
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-2 p-2 rounded hover:bg-opacity-90"
                        >
                            <span className="text-sm">+ 添加助手</span>
                        </button>
                    </div>
                </div>)}

                {/* Chat Container */}
                <div
                    className="flex-1 flex flex-col"
                >
                    {/* Messages */}
                    <div className="flex-1 overflow-auto p-4">
                        {/* System message */}
                        <div className="flex justify-center mb-4">
                            <div
                                className="rounded-lg p-2 text-xs text-center"
                            >
                                <p>Today, 2:30 PM</p>
                            </div>
                        </div>

                        {/* User message 1 */}
                        <div className="flex justify-end mb-4">
                            <div className="flex gap-2 max-w-[80%]">
                                <div
                                    className="rounded-lg p-3"
                                >
                                    <p
                                        className="text-sm"
                                    >
                                        Hello! I&apos;m getting this strange API error when trying to authenticate. Can you help me figure out what&apos;s wrong?
                                    </p>
                                </div>
                                <div className="self-end">
                                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                                        <span className="text-white text-xs font-medium">JD</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* User message with code */}
                        <div className="flex justify-end mb-4">
                            <div className="flex gap-2 max-w-[80%]">
                                <div
                                    className="rounded-lg p-3"
                                >
                                    <p
                                        className="text-sm mb-2"
                                    >
                                        Here&apos;s the error I&apos;m getting:
                                    </p>
                                    <div
                                        className="rounded p-2 text-xs font-mono"
                                    >
                                        <pre style={{ margin: 0 }}>
                                            <code>
                                                {`{
  "message": "500 \\\"Augment API request failed with status 401: Invalid token\\\"",
  "status": 500,
  "error": "Augment API request failed with status 401: Invalid token"
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                                <div className="self-end opacity-0">
                                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                                        <span className="text-white text-xs font-medium">JD</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Assistant message */}
                        <div className="flex mb-4 gap-2">
                            <div className="self-end">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center">
                                    <User size={12} />
                                </div>
                            </div>
                            <div
                                className="max-w-[80%] rounded-lg p-3"
                            >
                                <p className="text-sm mb-2">
                                    I&apos;ll help you troubleshoot that API error. It looks like you&apos;re getting a 401 error which
                                    indicates an authentication issue.
                                </p>
                                <p className="text-sm mb-2">
                                    This typically means your API token is either:
                                </p>
                                <ul className="list-disc pl-5 text-sm mb-2">
                                    <li>Invalid or malformed</li>
                                    <li>Expired</li>
                                    <li>Missing required scopes</li>
                                </ul>
                                <p className="text-sm">Can you check if your token is still valid and properly configured?</p>
                            </div>
                        </div>
                    </div>

                    {/* Input area */}
                    <div
                        className="p-4 border-t"
                    >
                        <div
                            className="flex items-center rounded-lg p-2"
                        >
                            <div className="flex items-center gap-2 mr-2">
                                <button
                                    type="button"
                                    className="p-1.5 rounded hover:bg-opacity-20"
                                >
                                    <Paperclip size={16} />
                                </button>
                                <button
                                    type="button"
                                    className="p-1.5 rounded hover:bg-opacity-20"
                                >
                                    <Paperclip size={16} />
                                </button>
                            </div>
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 bg-transparent border-none outline-none text-sm"
                            />
                            <button
                                type="button"
                                className="p-1.5 rounded-full ml-2"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}