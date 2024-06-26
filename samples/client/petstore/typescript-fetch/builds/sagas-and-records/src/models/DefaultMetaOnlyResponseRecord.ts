/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {ApiRecordUtils, knownRecordFactories} from "../runtimeSagasAndRecords";
import {getApiEntitiesState} from "../ApiEntitiesSelectors"
import {List, Record, RecordOf, Map} from 'immutable';
import {Schema, schema, NormalizedSchema} from "normalizr";
import {select, call} from "redux-saga/effects";

import {
    DefaultMetaOnlyResponse,
} from './DefaultMetaOnlyResponse';

import {
    ResponseMeta,
} from './ResponseMeta';

import {
    ResponseMetaRecord,
    responseMetaRecordUtils
} from './ResponseMetaRecord';

export const DefaultMetaOnlyResponseRecordProps = {
    recType: "DefaultMetaOnlyResponseApiRecord" as "DefaultMetaOnlyResponseApiRecord",
    meta: ResponseMetaRecord(),
};

export type DefaultMetaOnlyResponseRecordPropsType = typeof DefaultMetaOnlyResponseRecordProps;
export const DefaultMetaOnlyResponseRecord = Record(DefaultMetaOnlyResponseRecordProps, DefaultMetaOnlyResponseRecordProps.recType);
export type DefaultMetaOnlyResponseRecord = RecordOf<DefaultMetaOnlyResponseRecordPropsType>;

knownRecordFactories.set(DefaultMetaOnlyResponseRecordProps.recType, DefaultMetaOnlyResponseRecord);


class DefaultMetaOnlyResponseRecordUtils extends ApiRecordUtils<DefaultMetaOnlyResponse, DefaultMetaOnlyResponseRecord> {
    public normalize(apiObject: DefaultMetaOnlyResponse, asEntity?: boolean): DefaultMetaOnlyResponse {
        (apiObject as any).recType = DefaultMetaOnlyResponseRecordProps.recType;
        responseMetaRecordUtils.normalize(apiObject['meta']);
        return apiObject;
    }

    public toApi(record: DefaultMetaOnlyResponseRecord): DefaultMetaOnlyResponse {
        const apiObject = super.toApi(record);
        apiObject['meta'] = responseMetaRecordUtils.toApi(record['meta']);
        return apiObject;
    }
}

export const defaultMetaOnlyResponseRecordUtils = new DefaultMetaOnlyResponseRecordUtils();


