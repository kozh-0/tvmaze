export default function Footer() {
    return (
        <footer className="page-footer #5e35b1 deep-purple darken-1">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} kozh inc.
          <a className="grey-text text-lighten-4 right" href="https://github.com/kozh-0">Github</a>
          </div>
        </div>
      </footer>
    )
}