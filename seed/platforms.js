
const appleOS = await Platform.find({ platform_name:  'iOS'})

    const platforms = [
       { platform: 'iOS',
         platform_id: platforms[0]._id
       },
       {
        platform: 'Android',
        platform_id: platforms[0]._id
       }
    ]

 
const run = async () => {
    await main()
    db.close
}

