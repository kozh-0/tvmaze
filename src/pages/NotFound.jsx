import { useHistory } from "react-router-dom";

export default function NotFound() {

    const { goBack } = useHistory()

    const styles = {
        flexDirection: 'column',
        justifyContent: 'normal',
        color: 'white',
        textAlign: 'center',
        minHeight: 'calc(100vh - 100px - 50px)',
    }

    return (
        <>
            <button className="btn" onClick={goBack}>Back</button>
            <div style={styles}>
                <h2>Page not found</h2>
                <h2>¯\_(ツ)_/¯</h2>
            </div>
        </>
    );
}