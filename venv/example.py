import aiohttp_cors
from aiohttp import web
import psycopg2
import psycopg2.extras
from config import host, user, password, db_name

try:
    # connect to exist database 
    connection =psycopg2.connect(
        host=host,
        user=user,
        password=password,
        database=db_name
    )
    async def Reserve(request):
        body = await request.json()
        # the cursor for perfoming database operations
        with connection.cursor() as cursor:
            cursor.execute(
                """INSERT INTO reservation  VALUES (%(name)s, %(phone)s, %(date)s, %(time)s, %(number)s);""",body
            )
        connection.commit()
        return web.Response(status=200, body=str(body))
    
    
    app = web.Application()
    app.add_routes([web.post('/', Reserve)]) 
    web.run_app(app)
    # the cursor for perfoming database operations 
    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT version();"
        )

except Exception as _ex:
    print("[INFO] Error while working with PostgreSQL", _ex)
finally:
    if connection:
        connection.close()
        print("[INFO] PostgreSQL connection closed")
