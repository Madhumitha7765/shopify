
function App() {
  return (
    <div classname="grid-container">
        <header>
              <Link to="/">React Shopping Cart</Link>
              <Link to="/admin">Admin</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <footer>All right is reserved.</footer>

    </div>

  );
}

export default App;
