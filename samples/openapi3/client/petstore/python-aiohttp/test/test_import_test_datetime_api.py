# coding: utf-8

"""
    OpenAPI Petstore

    This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from petstore_api.api.import_test_datetime_api import ImportTestDatetimeApi


class TestImportTestDatetimeApi(unittest.IsolatedAsyncioTestCase):
    """ImportTestDatetimeApi unit test stubs"""

    async def asyncSetUp(self) -> None:
        self.api = ImportTestDatetimeApi()

    async def asyncTearDown(self) -> None:
        await self.api.api_client.close()

    async def test_import_test_return_datetime(self) -> None:
        """Test case for import_test_return_datetime

        test date time
        """
        pass


if __name__ == '__main__':
    unittest.main()
