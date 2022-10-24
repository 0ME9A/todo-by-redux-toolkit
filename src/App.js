import AddPost from "./features/post/AddPost";
import PostList from "./features/post/PostList";

function App() {
  return (
    <div className="App bg-violet-900 min-h-screen">
      <h1 className="text-center font-bold text-xl p-5 text-white">Redux Project</h1>
      <header className="App-header flex w-full flex-col items-center justify-center gap-2 p-3">
        <AddPost/>
        <PostList />
      </header>
    </div>
  );
}

export default App;
