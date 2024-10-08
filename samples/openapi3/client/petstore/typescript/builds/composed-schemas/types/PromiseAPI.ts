import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Cat } from '../models/Cat';
import { Dog } from '../models/Dog';
import { FilePostRequest } from '../models/FilePostRequest';
import { PetByAge } from '../models/PetByAge';
import { PetByType } from '../models/PetByType';
import { PetsFilteredPatchRequest } from '../models/PetsFilteredPatchRequest';
import { PetsPatchRequest } from '../models/PetsPatchRequest';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [filePostRequest]
     */
    public filePostWithHttpInfo(filePostRequest?: FilePostRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filePostWithHttpInfo(filePostRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [filePostRequest]
     */
    public filePost(filePostRequest?: FilePostRequest, _options?: Configuration): Promise<void> {
        const result = this.api.filePost(filePostRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [petsFilteredPatchRequest]
     */
    public petsFilteredPatchWithHttpInfo(petsFilteredPatchRequest?: PetsFilteredPatchRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.petsFilteredPatchWithHttpInfo(petsFilteredPatchRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [petsFilteredPatchRequest]
     */
    public petsFilteredPatch(petsFilteredPatchRequest?: PetsFilteredPatchRequest, _options?: Configuration): Promise<void> {
        const result = this.api.petsFilteredPatch(petsFilteredPatchRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [petsPatchRequest]
     */
    public petsPatchWithHttpInfo(petsPatchRequest?: PetsPatchRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.petsPatchWithHttpInfo(petsPatchRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [petsPatchRequest]
     */
    public petsPatch(petsPatchRequest?: PetsPatchRequest, _options?: Configuration): Promise<void> {
        const result = this.api.petsPatch(petsPatchRequest, _options);
        return result.toPromise();
    }


}



