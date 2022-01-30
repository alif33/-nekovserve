import Document, { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script';


class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>

					{/* <!-- Favicon --> */}

					{/* <link rel="stylesheet" href="" /> */}
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
					{/* <link rel="stylesheet" href="/css/style.css" /> */}
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
						<link rel="preconnect" href="https://fonts.gstatic.com"/>
							<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
						</Head>
						<body>
							<Main />
							<NextScript />							
						</body>
			</Html>
	)
  }
}

export default MyDocument