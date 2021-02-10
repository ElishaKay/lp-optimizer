exports.awesomeTemplateCSS = ({buttonColor}) => {
	return `
		<style>
			
		.container{
            width: 60%;
            margin: auto;
        }
        .grid {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
            flex: 1;
            width: 100%;
            margin: auto;
        }

        .product {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: calc(20% - 8px);
            max-height: 450px;
            font-family: Montserrat, sans-serif;
            text-decoration: none;
            position: relative;
            /*height: 300px;*/
            margin-bottom: 25px;
            margin-right: 15px;
        }

        .product .product-content {
            /*height: 100%;*/
            background-color: #fff;
            width: 100%;
            border: 1px solid #e6e6e6;
            border-radius: 5px;
            padding: 10px 0;
            transition: all .2s ease-in-out;
        }


        .product .product-content:hover{
            border-color: #0d82df;
            box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
        }

        .product-content .image {
            display: block;
            height: 150px;
            width: auto;
            -o-object-fit: contain;
            object-fit: contain;
            max-width: 90%;
            margin: 0 auto;
        }

        .product-content .title {
            font-weight: 600;
            color: #525252;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            height: 38px;
            text-overflow: ellipsis;
            font-size: 15px;
            line-height: 19px;
            word-break: break-word;
            width: 90%;
            margin: 30px auto;
        }

        .product-content .prices {
            display: block;
            text-align: center;
            height: 30px;
            margin: 0 auto;
            font-weight: 700;
            font-size: 18px;
        }

        .product-content .prices .price {
            margin: 0;
            padding: 0;
            border: 0;
            font: inherit;
            font-size: 100%;
            vertical-align: baseline;
        }

        .product-content .buttons-container{
            display: block;
            height: 40px;
            margin: 10px 5px;
            padding: 0 5px;
        }

        .buttons-container button {
            cursor: pointer;
            display: block;
            width: 100%;
            height: 100%;
            color: ${buttonColor};
            border: 1px solid ${buttonColor};
            border-radius: 3px;
            background-color: white;
            margin: auto;
        }

        .buttons-container button:hover {
            color: white;
            background-color: ${buttonColor};
        }


		</style>
	`
}