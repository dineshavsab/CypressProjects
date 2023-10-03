export interface userData
{
    userid : string,
    password : string
}

export interface addressData
{
    userid : string,
    city : string
}

export interface userAddressData
{
    userinfo : userData,
    userAddress : addressData
}