import click
import psycopg2

@click.command()
@click.version_option(version=1.0, prog_name='')
@click.option('--config')
def cli(config):
