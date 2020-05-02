import { TestingData, CasesData } from './testing-data.model'
import { StateWiseCases } from './state-wise-case.model'

export interface Covid19Data {
    cases_time_series: Array<CasesData>;
    statewise: Array<StateWiseCases>;
    tested: Array<TestingData>;
}