import apiPathData from '../testdata/api-path-data.json'
export class CommonApiUtils {

    static async generateToken(request) {

        const response = await request.post(apiPathData.auth_path,{

                data: {
                    username: 'admin',
                    password: 'password123'
                }
            
            }
        );

        if (!response.ok()) {
            throw new Error(
                `Token generation failed: ${response.status()} ${await response.text()}`
            );
        }

        const responseBody = await response.json();

        return responseBody.token;
    }
}