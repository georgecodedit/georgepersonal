export default function Layout({ title, children }) {
    return (
        <div className="container mx-auto px-5 sm:px-10 xl:px-40 py-4 " style={{ minHeight: 'calc(100vh - 64px)' }}>
            <h1 className="text-3xl mb-4">{title}</h1>
            {children}
        </div>
    );
}