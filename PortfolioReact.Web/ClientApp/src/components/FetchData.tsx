import * as React from 'react';
import { WEATHER_FORECAST } from './../constants/ApiConstants'

interface IForecast {
    date: Date;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

export const FetchData: React.FunctionComponent = () => {
    const [forecasts, setForecasts] = React.useState<IForecast[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        populateWeatherData();
    }, []);

    const renderForecastsTable = (forecasts: IForecast[]) => {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        forecasts.map((forecast, i) =>
                            <tr key={i}>
                                <td>{forecast.date}</td>
                                <td>{forecast.temperatureC}</td>
                                <td>{forecast.temperatureF}</td>
                                <td>{forecast.summary}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }

    const populateWeatherData = async () => {
        const response = await fetch(WEATHER_FORECAST);
        const data = await response.json();
        setForecasts(data);
        setIsLoading(false);
    }

    return (
        <>
            <h1 id="tabelLabel" >Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {
                isLoading 
                    ? <p><em>Loading...</em></p>
                    : renderForecastsTable(forecasts)
            }
        </>
    );
}
