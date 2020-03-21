import click
import psycopg2

@click.command()
@click.version_option(version=1.0, prog_name='')
@click.option('--database', '-db', default='postgres')
@click.option('--port', '-p', type=int, default=5432)
@click.option('--user', '-U', default='postgres')
@click.option('--password', '-W', default='postgres')
@click.option('--host', '-h', default='localhost')
def cli(database, host, password, port, user):

    # Get all properties
    # Get all properties managed by branch
    # Get all properties available within certain date
    #  

    connection = psycopg2.connect(host=host, database=database, user=user, password=password, port=port)

    cursor = connection.cursor()

    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS {} (
        id SERIAL PRIMARY KEY,
        name VARCHAR (250),
        risk integer,
        currentRisk integer,
        hash VARCHAR (250),
        url text,
        reviewDate VARCHAR (250),
        violationDate VARCHAR (250),
        threat text,
        teaser text,
        alertId VARCHAR (250),
        reviewedBy VARCHAR (250),
        notes text,
        escalated BOOLEAN DEFAULT FALSE
        )
        """.format(table)
    )

    top_risky_entities_and_alerts = []

    rows = cursor.execute("SELECT * FROM {} WHERE reviewDate BETWEEN '{}' AND '{}'".format(table, time_start, time_end))
    
    if rows:
        for row in rows:
            top_risky_entities_and_alerts.append(
                {
                    'name': row[0],
                    'risk': row[1],
                    'current_risk': row[2],
                    'entity_hash': row[3],
                    'url': row[4],
                    'review_date': row[5],
                    'violation_date': row[6],
                    'threat': row[7],
                    'teaser': row[8],
                    'alert_id': row[9]
                }
            )
            
    cursor.close()

    return top_risky_entities_and_alerts