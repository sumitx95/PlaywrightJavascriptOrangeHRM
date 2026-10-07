 
import { request } from 'node:http'
import{expect, test} from '../../fixtures/hooks-fixture'
import apiPathData from '../../testdata/api-path-data.json'
import restfulApiData from '../../testdata/restful-booker-api-module-data.json'
import { CommonApiUtils } from '../../utils/CommonApiUtils'
 
// test('fetch details with booking is', async({request})=>{

//     const  response =await request.get('booking/1')
//     console.log(await response.json());
    
// })

test('fetch all the booking IDs using GET API and receive valid response.',{tag:['@UAT','@API']},async({request})=>{
//const bookingidsrespo=await request.get('booking')
const bookingidsrespo=await request.get(apiPathData.booking_path)

const bookingjsonrespo=await bookingidsrespo.json()
console.log(bookingjsonrespo)

expect(bookingidsrespo.status()).toBe(200)
expect(bookingidsrespo.statusText()).toBe('OK')
//expect(bookingidsrespo.ok()).toBeTruthy()
//expect(bookingidsrespo.headers()['content-type']).toBe('application/json; charset=utf-8')
expect(bookingidsrespo.headers()['content-type']).toBe(restfulApiData.content_type)
expect(bookingjsonrespo).not.toBeNull()


})

test('Verify that the user is able to fetch booking details for a booking id using GET API and receives valid response.',{tag:['@API','@UAT']},async({request})=>{

const bookingresp=await request.get(`${apiPathData.booking_path}/${restfulApiData.booking_id2}`)
const bookingJsonresponse=await bookingresp.json();
console.log(bookingJsonresponse)
expect(bookingresp.status()).toBe(200)
expect(bookingresp.statusText()).toBe('OK')
expect(bookingresp).not.toBeNull()
expect(bookingJsonresponse.firstname).toEqual(restfulApiData.firstname)

})

 
     
test("Id - 10 Booking] Verify that the user is able to Create new booking using Post API and receive valid response.", {
    tag: ['@API', '@UAT'],
}, async ({ request }) => {

    const createBookingResp = await request.post(apiPathData.booking_path, {
        data: restfulApiData.create_booking
    });

    console.log('Status:', createBookingResp.status());
    console.log('Status Text:', createBookingResp.statusText());

    expect(createBookingResp.status()).toBe(200);

    const createBookingJsonResp = await createBookingResp.json();

    console.log('Response:', createBookingJsonResp);

    expect(createBookingJsonResp).toHaveProperty('bookingid');
    expect(createBookingJsonResp.booking).toMatchObject(
        restfulApiData.create_booking
    );
});

test('update existing user data',async({request})=>{

const putRequest=await request.put(`${apiPathData.booking_path}/${restfulApiData.booking_id2}`,{
    data:restfulApiData.update_booking
})
 const updateBookingResponse=await putRequest.json()
 expect(putRequest.status()).toBe(200)
 expect(updateBookingResponse).toMatchObject(restfulApiData.update_booking)

})

test.only('update existing user by token', async({request})=>{


    const newtoken=await CommonApiUtils.generateToken(request)

    const putRequest=await request.put(`${apiPathData.booking_path}/${restfulApiData.booking_id2}`,{
        headers:{
                 Cookie: `token=${newtoken}`
        },
    data:restfulApiData.update_booking
})
 const updateBookingResponse=await putRequest.json()
 expect(putRequest.status()).toBe(200)
 expect(updateBookingResponse).toMatchObject(restfulApiData.update_booking)
})


     

 
 