<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
            <head>
                <style>
                .Fashion
                {
                margin-left:auto;
                margin-right:auto;
                }
            div
            {
                text-align:center;
                width:48%;
            }
            td,th
            {
                font-size:larger;
                padding:20px;
                text-align:center !important;
            }
                </style>
            </head>
            <body>
                <h1 style="text-align:center;">FaShiO</h1>
                <h2 style="text-align:center;">Latest Fashion Items Up for You!</h2>
                <div class='Fashion'>
                    <h2>All Listed Here!</h2>
                    <table border="2">
                        <tr bgcolor="#accafa">
                            <th style="text-align:left">Item</th>
                            <th style="text-align:left">Category</th>
                            <th style="text-align:left">Size</th>
                            <th style="text-align:left">Price</th>
                        </tr>
                        <xsl:for-each select="fashions/fashion">
                            <tr>
                                <td>
                                    <xsl:value-of select="item"/>
                                </td>
                                <td>
                                    <xsl:value-of select="category"/>
                                </td>
                                <td>
                                    <xsl:value-of select="size"/>
                                </td>
                                <td>
                                    <xsl:value-of select="price"/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>

            </body>
        </html>
	</xsl:template>
</xsl:stylesheet>